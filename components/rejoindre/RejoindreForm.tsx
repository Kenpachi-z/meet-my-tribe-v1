"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Landmark, GraduationCap, HeartHandshake, Loader2 } from "lucide-react";

const profileTypes = [
    { id: "collectivite", label: "Collectivité / Organisme public", icon: Landmark },
    { id: "jeune_talent", label: "Un Jeune Talent (18-30 ans)", icon: GraduationCap },
    { id: "benevole", label: "Un Bénévole", icon: HeartHandshake },
] as const;

type ProfileType = typeof profileTypes[number]["id"];

const formSchema = z.object({
    profileType: z.enum(["collectivite", "jeune_talent", "benevole"]),
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    ageOrCreation: z.string().min(1, "Ce champ est requis"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(10, "Numéro de téléphone invalide"),
    project: z.string().min(10, "Veuillez détailler un peu plus votre projet ou besoin"),
});

type FormData = z.infer<typeof formSchema>;

export function RejoindreForm() {
    const [selectedProfile, setSelectedProfile] = useState<ProfileType>("collectivite");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            profileType: "collectivite",
        }
    });

    const handleProfileSelect = (id: ProfileType) => {
        setSelectedProfile(id);
        setValue("profileType", id);
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call for now (can map to Supabase later if needed)
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form Submitted:", data);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
    };

    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mt-8 md:mt-12">
            <div className="p-8 md:p-12">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-mmt-chocolat mb-2">Vous êtes...</h2>
                    <p className="text-mmt-marron">Sélectionnez le profil qui vous correspond le mieux.</p>
                </div>

                {/* Profile Tabs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {profileTypes.map((profile) => {
                        const Icon = profile.icon;
                        const isSelected = selectedProfile === profile.id;
                        return (
                            <button
                                key={profile.id}
                                type="button"
                                onClick={() => handleProfileSelect(profile.id)}
                                className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 ${isSelected
                                        ? "border-mmt-chocolat bg-mmt-cream text-mmt-chocolat scale-105 shadow-md"
                                        : "border-gray-200 bg-white text-gray-500 hover:border-mmt-terracotta/50 hover:bg-gray-50"
                                    }`}
                            >
                                <Icon className={`w-12 h-12 mb-4 ${isSelected ? "text-mmt-terracotta" : "text-gray-400"}`} />
                                <span className={`font-bold text-center ${isSelected ? "text-mmt-chocolat" : "text-gray-600"}`}>
                                    {profile.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {submitSuccess ? (
                    <div className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200">
                        <h3 className="text-2xl font-bold mb-2">Merci pour votre demande !</h3>
                        <p>Nous avons bien reçu vos informations et reviendrons vers vous dans les plus brefs délais.</p>
                        <button
                            className="mt-6 px-6 py-2 bg-mmt-chocolat text-white rounded-full font-bold hover:bg-mmt-marron transition-colors"
                            onClick={() => setSubmitSuccess(false)}
                        >
                            Soumettre une autre demande
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-mmt-chocolat mb-2">
                                        Nom complet / Nom de la structure *
                                    </label>
                                    <input
                                        {...register("name")}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mmt-terracotta focus:border-transparent transition-shadow bg-gray-50/50"
                                        placeholder="Ex: Mairie de Paris ou Jean Dupont"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-mmt-chocolat mb-2">
                                        Adresse email professionnelle *
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email")}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mmt-terracotta focus:border-transparent transition-shadow bg-gray-50/50"
                                        placeholder="contact@exemple.fr"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-mmt-chocolat mb-2">
                                        Âge (ou date de création) *
                                    </label>
                                    <input
                                        {...register("ageOrCreation")}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mmt-terracotta focus:border-transparent transition-shadow bg-gray-50/50"
                                        placeholder="Ex: 24 ou 1985"
                                    />
                                    {errors.ageOrCreation && <p className="text-red-500 text-sm mt-1">{errors.ageOrCreation.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-mmt-chocolat mb-2">
                                        Numéro de téléphone *
                                    </label>
                                    <input
                                        {...register("phone")}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mmt-terracotta focus:border-transparent transition-shadow bg-gray-50/50"
                                        placeholder="06 00 00 00 00"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Full Width */}
                        <div>
                            <label className="block text-sm font-bold text-mmt-chocolat mb-2">
                                Votre besoin / Projet (ou motivation) *
                            </label>
                            <textarea
                                {...register("project")}
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mmt-terracotta focus:border-transparent transition-shadow bg-gray-50/50 resize-y"
                                placeholder="Dites-nous en plus sur vos attentes, vos projets ou ce qui vous motive à nous rejoindre..."
                            ></textarea>
                            {errors.project && <p className="text-red-500 text-sm mt-1">{errors.project.message}</p>}
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-8 bg-mmt-chocolat hover:bg-mmt-marron text-white text-lg font-bold rounded-xl transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                                        Envoi en cours...
                                    </>
                                ) : (
                                    "Envoyer ma demande"
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
