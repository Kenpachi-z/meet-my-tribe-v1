import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(req: NextRequest) {
    const body = await req.json();

    // 1. Validate & sanitize with Zod (includes honeypot check)
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { error: parsed.error.flatten().fieldErrors },
            { status: 400 }
        );
    }

    // 2. Strip honeypot field — never persist it to the DB
    const { _trap, ...payload } = parsed.data;

    // 3. Insert via service_role client (bypasses RLS for server-side writes)
    const { error } = await supabaseServer
        .from("contact_submissions")
        .insert([payload]);

    if (error) {
        console.error("[API/contact] Supabase insert error:", error.message);
        return NextResponse.json(
            { error: "Une erreur est survenue. Veuillez réessayer." },
            { status: 500 }
        );
    }

    return NextResponse.json({ success: true }, { status: 201 });
}

// Reject all non-POST methods explicitly
export async function GET() {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
