"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"



const formSchema = z.object({
  firstName: z.string().trim().min(2,{
    message:"First name must be at least 2 characters."
  }),
  lastName: z.string().min(2, {
    message: "last name must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email address.").min(2, {
    message: "Email must be at least 2 characters.",
  }),
  message: z.string({message: "Enter message"}).min(12, {
    message: "message must be at least 20 characters.",
  }),
})

export function ContactForm() {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  })
  
  return ( 
    <Form {...form}>

      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input autoComplete="cc-given-name" placeholder="Alkis" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the First name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input type="text" autoComplete="cc-family-name" placeholder="Lorantos" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the Last name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )} />

        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" autoComplete="email" placeholder="me@example.com" {...field} />
              </FormControl>
              <FormDescription>
                Enter your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )} />


        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea id="message" placeholder="Your message..." rows={4} {...field} />
              </FormControl>
              <FormDescription>
                Enter your message.
              </FormDescription>
              <FormMessage />
            </FormItem>)} />

        <Button className="w-full mt-12" type="submit"> Submit </Button>
      </form>
    </Form>
  )
}
