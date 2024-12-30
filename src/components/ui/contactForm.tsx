"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { sendEmail } from "@/utils/email";
import { toast } from "sonner";

const formSchema = z.object({
  nom: z.string().min(2, { message: "entrez votre nom." }),
  email: z.string().email({ message: "entrez un email valide." }),
  sujet: z.string().min(2, {
    message: "entrez un sujet valide.",
  }),
  message: z.string().min(10, {
    message: "votre message doit contenir au moins 10 caractères.",
  }),
});
export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { nom: "", email: "", sujet: "", message: "" },
  });
  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const mailText = `Nom: ${values.nom}\nEmail: ${values.email}\nSujet: ${values.sujet}\nMessage: ${values.message}`;
    const res = await sendEmail({
      text: mailText,
      sujet: "Nouveau message de contact",
      email: values.email,
    });
    if (res?.success) {
      toast.success("Votre message a été envoyé avec succès.");
      form.reset();
    } else {
      toast.error(res?.message);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Votre Nom</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>Votre mail</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sujet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sujet</FormLabel>
              <FormControl>
                <Input placeholder="sujet" {...field} />
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <textarea
                  placeholder="Message"
                  {...field}
                  className="resize-none border border-gray-300 rounded-md p-2 w-full h-32"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          type="submit"
          className="bg-[#488DCA] rounded-sm text-base lg:text-lg px-4 py-6 w-full  font-normal  hover:bg-[#285C8A]"
        >
          {isLoading ? (
            "encours..."
          ) : (
            <>
              envoyer
              <Send size={24} />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
