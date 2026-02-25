"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            profil: "autre",
            rgpd_consent: false,
            newsletter_optin: false,
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        setStatus("loading");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Une erreur est survenue lors de l'envoi.");
            }

            setStatus("success");
            reset();
        } catch (error: any) {
            console.error("Form submission error:", error);
            setErrorMessage(error.message || "Une erreur est survenue. Veuillez réessayer.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-white p-8 rounded-2xl border border-mmt-sable/20 shadow-sm text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-title text-2xl font-bold text-mmt-chocolat mb-4">Message envoyé !</h3>
                <p className="text-mmt-marron mb-8 max-w-md mx-auto">
                    Merci de nous avoir contactés. Notre équipe reviendra vers vous dans les plus brefs délais.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="px-8 py-3 bg-mmt-terracotta text-white font-bold rounded-full hover:bg-mmt-rouille transition-colors"
                >
                    Envoyer un autre message
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 md:p-10 rounded-2xl border border-mmt-sable/20 shadow-sm space-y-6"
            noValidate
        >
            {/* Honeypot Field (Hidden from humans) */}
            <div className="hidden" aria-hidden="true">
                <input
                    type="text"
                    {...register("_trap")}
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nom */}
                <div className="space-y-2">
                    <label htmlFor="nom" className="block text-sm font-semibold text-mmt-marron">
                        Nom complet <span className="text-mmt-terracotta">*</span>
                    </label>
                    <input
                        id="nom"
                        type="text"
                        placeholder="Jean Dupont"
                        {...register("nom")}
                        className={cn(
                            "w-full px-4 py-3 rounded-xl border border-mmt-sable/30 focus:ring-2 focus:ring-mmt-terracotta/20 focus:border-mmt-terracotta outline-none transition-all",
                            errors.nom && "border-red-500 focus:ring-red-500/10 focus:border-red-500"
                        )}
                        aria-invalid={errors.nom ? "true" : "false"}
                        aria-describedby={errors.nom ? "nom-error" : undefined}
                    />
                    {errors.nom && (
                        <p id="nom-error" className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" /> {errors.nom.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-mmt-marron">
                        Adresse email <span className="text-mmt-terracotta">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="jean@exemple.com"
                        {...register("email")}
                        className={cn(
                            "w-full px-4 py-3 rounded-xl border border-mmt-sable/30 focus:ring-2 focus:ring-mmt-terracotta/20 focus:border-mmt-terracotta outline-none transition-all",
                            errors.email && "border-red-500 focus:ring-red-500/10 focus:border-red-500"
                        )}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                        <p id="email-error" className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" /> {errors.email.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Profil */}
            <div className="space-y-2">
                <label htmlFor="profil" className="block text-sm font-semibold text-mmt-marron">
                    Vous êtes... <span className="text-mmt-terracotta">*</span>
                </label>
                <select
                    id="profil"
                    {...register("profil")}
                    className={cn(
                        "w-full px-4 py-3 rounded-xl border border-mmt-sable/30 focus:ring-2 focus:ring-mmt-terracotta/20 focus:border-mmt-terracotta outline-none transition-all appearance-none bg-white",
                        errors.profil && "border-red-500 focus:ring-red-500/10 focus:border-red-500"
                    )}
                >
                    <option value="collectivite">Une collectivité</option>
                    <option value="partenaire">Un partenaire</option>
                    <option value="benevole">Un futur bénévole</option>
                    <option value="autre">Autre</option>
                </select>
                {errors.profil && (
                    <p className="text-red-500 text-xs mt-1">{errors.profil.message}</p>
                )}
            </div>

            {/* Message */}
            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-mmt-marron">
                    Votre message <span className="text-mmt-terracotta">*</span>
                </label>
                <textarea
                    id="message"
                    rows={5}
                    placeholder="Comment pouvons-nous vous aider ?"
                    {...register("message")}
                    className={cn(
                        "w-full px-4 py-3 rounded-xl border border-mmt-sable/30 focus:ring-2 focus:ring-mmt-terracotta/20 focus:border-mmt-terracotta outline-none transition-all resize-none",
                        errors.message && "border-red-500 focus:ring-red-500/10 focus:border-red-500"
                    )}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && (
                    <p id="message-error" className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.message.message}
                    </p>
                )}
            </div>

            {/* Checkboxes */}
            <div className="space-y-4 pt-2">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="rgpd_consent"
                            type="checkbox"
                            {...register("rgpd_consent")}
                            className="w-5 h-5 rounded border-mmt-sable text-mmt-terracotta focus:ring-mmt-terracotta/20"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="rgpd_consent" className="font-medium text-mmt-marron">
                            J'accepte que mes données soient traitées pour répondre à ma demande. <span className="text-mmt-terracotta">*</span>
                        </label>
                        {errors.rgpd_consent && (
                            <p className="text-red-500 text-xs mt-1">{errors.rgpd_consent.message}</p>
                        )}
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="newsletter_optin"
                            type="checkbox"
                            {...register("newsletter_optin")}
                            className="w-5 h-5 rounded border-mmt-sable text-mmt-terracotta focus:ring-mmt-terracotta/20"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="newsletter_optin" className="text-mmt-marron">
                            Je souhaite recevoir la newsletter de Meet My Tribe. (Optionnel)
                        </label>
                    </div>
                </div>
            </div>

            {/* Error Message */}
            {status === "error" && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 flex items-center text-sm animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    {errorMessage}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === "loading"}
                className={cn(
                    "w-full py-4 px-6 rounded-full text-white font-bold text-lg shadow-lg shadow-mmt-terracotta/20 transition-all flex items-center justify-center",
                    status === "loading"
                        ? "bg-mmt-terracotta/70 cursor-not-allowed"
                        : "bg-mmt-terracotta hover:bg-mmt-rouille hover:-translate-y-0.5"
                )}
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        Envoi en cours...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5 mr-3" />
                        Envoyer mon message
                    </>
                )}
            </button>
        </form>
    );
}
