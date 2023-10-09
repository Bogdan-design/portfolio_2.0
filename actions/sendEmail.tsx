'use server'
import {Resend} from "resend";
import {getErrorMessage, validateString} from "@/lib/utils";
import {ContactFormEmail} from "@/email/contact-form-email";

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

    try {
        await resend.emails.send({
            from: 'Contact form<onboarding@resend.dev>',
            to: 'bogdanbw@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            react: <ContactFormEmail {...message,...senderEmail}/>
        });
    } catch (e: unknown) {
        return {
            error: getErrorMessage(e)
        }
    }
}