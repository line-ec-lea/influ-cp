"use client"

import { valibotResolver } from "@hookform/resolvers/valibot"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as v from "valibot"

import { Button } from "@repo/ui/src/components/button"
import { Checkbox } from "@repo/ui/src/components/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/src/components/form"
import { Input } from "@repo/ui/src/components/input"
import { RadioGroup, RadioGroupItem } from "@repo/ui/src/components/radio-group"
import { Textarea } from "@repo/ui/src/components/textarea"

const INQUIRY_TYPES = [
  "プロモーション",
  "スクール運営",
  "WEBマーケティング",
  "LINEビジネス",
  "その他",
] as const

const formSchema = v.object({
  name: v.pipe(
    v.string(),
    v.minLength(1, "お名前を入力してください"),
    v.maxLength(50, "50文字以内で入力してください"),
  ),
  company: v.optional(v.pipe(v.string(), v.maxLength(100)), ""),
  tel: v.optional(
    v.pipe(
      v.string(),
      v.maxLength(20),
      v.regex(/^[0-9-+\s()]*$/, "電話番号の形式が正しくありません"),
    ),
    "",
  ),
  address: v.optional(v.pipe(v.string(), v.maxLength(200)), ""),
  email: v.pipe(
    v.string(),
    v.minLength(1, "メールアドレスを入力してください"),
    v.email("メールアドレスの形式が正しくありません"),
  ),
  inquiryType: v.picklist(INQUIRY_TYPES, "ご依頼内容を選択してください"),
  message: v.pipe(
    v.string(),
    v.minLength(1, "お問い合わせ内容を入力してください"),
    v.maxLength(1000, "1,000文字以内で入力してください"),
  ),
  agreement: v.pipe(
    v.boolean(),
    v.literal(true, "プライバシーポリシーへの同意が必要です"),
  ),
})

export type ContactFormValues = v.InferOutput<typeof formSchema>

type ContactFormInput = v.InferInput<typeof formSchema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<ContactFormInput, unknown, ContactFormValues>({
    resolver: valibotResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      tel: "",
      address: "",
      email: "",
      inquiryType: undefined,
      message: "",
      agreement: false,
    },
  })

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 400))
    setSubmitted(true)
    form.reset()
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-brand-muted p-10 text-center">
        <p className="font-en text-sm font-bold uppercase tracking-widest text-brand">
          Thank you
        </p>
        <h2 className="mt-3 text-xl font-bold md:text-2xl">
          お問い合わせを受け付けました
        </h2>
        <p className="mt-4 text-sm text-foreground/70">
          内容を確認のうえ、担当者より2営業日以内にご連絡いたします。
        </p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        noValidate
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                お名前 <Required />
              </FormLabel>
              <FormControl>
                <Input autoComplete="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>会社名</FormLabel>
              <FormControl>
                <Input autoComplete="organization" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>電話番号</FormLabel>
              <FormControl>
                <Input type="tel" autoComplete="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>住所</FormLabel>
              <FormControl>
                <Input autoComplete="street-address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                E-mail <Required />
              </FormLabel>
              <FormControl>
                <Input type="email" autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="inquiryType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                ご依頼内容 <Required />
              </FormLabel>
              <FormControl>
                <RadioGroup
                  value={(field.value as string | undefined) ?? ""}
                  onValueChange={field.onChange}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  {INQUIRY_TYPES.map((t) => (
                    <label
                      key={t}
                      className="flex cursor-pointer items-center gap-3 rounded-md border border-border bg-background px-4 py-3 hover:border-brand"
                    >
                      <RadioGroupItem value={t} />
                      <span className="text-sm">{t}</span>
                    </label>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                お問い合わせ内容 <Required />
              </FormLabel>
              <FormControl>
                <Textarea rows={7} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agreement"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <label className="flex items-start gap-3 text-sm">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(v) => field.onChange(v === true)}
                  />
                  <span>
                    <a
                      href="/privacy"
                      className="text-brand underline underline-offset-2"
                    >
                      プライバシーポリシー
                    </a>
                    に同意します。
                  </span>
                </label>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-2 text-center">
          <Button
            type="submit"
            size="lg"
            className="min-w-56 bg-brand text-brand-foreground hover:bg-brand/90"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "送信中..." : "送信する"}
          </Button>
        </div>
      </form>
    </Form>
  )
}

function Required() {
  return (
    <span className="ml-1 rounded bg-brand px-1.5 py-0.5 text-[10px] font-bold text-brand-foreground">
      必須
    </span>
  )
}
