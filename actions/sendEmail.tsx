'use server'
import {Resend} from "resend";
import {getErrorMessage, validateString} from "@/lib/utils";
import {ContactFormEmail} from "@/email/contact-form-email";
import {createElement} from "react";

const resend = new Resend(process.env["RESEND_API_KEY "]);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid sender email'
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message'
        }
    }
    let data

    try {
        data = await resend.emails.send({
            from: 'Contact form<onboarding@resend.dev>',
            to: 'bogdanbw@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            react: createElement(ContactFormEmail,{
                message:message as string,
                senderEmail:senderEmail as string
            })
        });
    } catch (e: unknown) {
        return {
            error: getErrorMessage(e)
        }
    }
    return {
        data
    }
}