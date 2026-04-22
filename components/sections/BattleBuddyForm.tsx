"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  fullName: z.string().min(2, "Full legal name required"),
  serviceBranch: z.string().min(1, "Service branch required"),
  rankAtSeparation: z.string().min(1, "Rank required"),
  dischargeStatus: z.enum(["honorable", "under-honorable"], {
    message: "Must be honorably discharged or under honorable conditions",
  }),
  state: z.string().min(2, "State required"),
  whyStatement: z.string().min(50, "Please provide at least 50 characters"),
  stabilityAffirmation: z.boolean().refine((v) => v === true, {
    message: "You must affirm your current stability to apply",
  }),
  reference1Name: z.string().min(2, "Reference name required"),
  reference1Contact: z.string().min(5, "Reference contact required"),
  reference2Name: z.string().min(2, "Reference name required"),
  reference2Contact: z.string().min(5, "Reference contact required"),
});

type FormData = z.infer<typeof schema>;

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "0.75rem 1rem",
  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
  fontSize: "0.9375rem",
  color: "var(--charcoal)",
  backgroundColor: "var(--paper)",
  border: "1px solid color-mix(in srgb, var(--charcoal) 20%, transparent)",
  borderRadius: "2px",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-ibm-plex-mono), monospace",
  fontSize: "0.6875rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--patrol)",
  marginBottom: "0.5rem",
};

const errorStyle: React.CSSProperties = {
  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
  fontSize: "0.8125rem",
  color: "var(--flare)",
  marginTop: "0.375rem",
};

export function BattleBuddyForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    // Stub — wire to form backend (e.g., Resend, Formspree, or custom API route)
    console.log("Battle Buddy application:", data);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        style={{
          backgroundColor: "var(--forest)",
          color: "var(--bone)",
          padding: "2.5rem",
          borderRadius: "3px",
          maxWidth: "640px",
        }}
        role="status"
        aria-live="polite"
      >
        <p
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "1.375rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          Application received.
        </p>
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
            fontSize: "0.9375rem",
            lineHeight: 1.7,
            color: "color-mix(in srgb, var(--bone) 80%, transparent)",
            margin: 0,
          }}
        >
          Someone from the team will review your application and reach out within 5–7 business days. Thank you for standing up.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      style={{ maxWidth: "640px", display: "flex", flexDirection: "column", gap: "1.75rem" }}
      aria-label="Battle Buddy Application"
    >
      {/* Full name */}
      <div>
        <label htmlFor="fullName" style={labelStyle}>
          Full Legal Name *
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          style={inputStyle}
          aria-required="true"
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          {...register("fullName")}
        />
        {errors.fullName && (
          <p id="fullName-error" style={errorStyle} role="alert">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Service branch + rank */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label htmlFor="serviceBranch" style={labelStyle}>
            Service Branch *
          </label>
          <select
            id="serviceBranch"
            style={{ ...inputStyle, cursor: "pointer" }}
            aria-required="true"
            {...register("serviceBranch")}
          >
            <option value="">Select branch</option>
            <option value="Army">Army</option>
            <option value="Navy">Navy</option>
            <option value="Marine Corps">Marine Corps</option>
            <option value="Air Force">Air Force</option>
            <option value="Space Force">Space Force</option>
            <option value="Coast Guard">Coast Guard</option>
            <option value="National Guard">National Guard</option>
            <option value="Reserves">Reserves</option>
          </select>
          {errors.serviceBranch && (
            <p style={errorStyle} role="alert">{errors.serviceBranch.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="rankAtSeparation" style={labelStyle}>
            Rank at Separation *
          </label>
          <input
            id="rankAtSeparation"
            type="text"
            style={inputStyle}
            aria-required="true"
            placeholder="e.g., SSG, CPT, E-5"
            {...register("rankAtSeparation")}
          />
          {errors.rankAtSeparation && (
            <p style={errorStyle} role="alert">{errors.rankAtSeparation.message}</p>
          )}
        </div>
      </div>

      {/* Discharge status */}
      <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
        <legend style={labelStyle}>
          Discharge Status *
        </legend>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginTop: "0.5rem" }}>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "0.9375rem",
              color: "var(--charcoal)",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              value="honorable"
              style={{ accentColor: "var(--flare)", width: "16px", height: "16px" }}
              {...register("dischargeStatus")}
            />
            Honorably Discharged
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "0.9375rem",
              color: "var(--charcoal)",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              value="under-honorable"
              style={{ accentColor: "var(--flare)", width: "16px", height: "16px" }}
              {...register("dischargeStatus")}
            />
            Under Honorable Conditions
          </label>
        </div>
        {errors.dischargeStatus && (
          <p style={errorStyle} role="alert">{errors.dischargeStatus.message}</p>
        )}
      </fieldset>

      {/* State */}
      <div>
        <label htmlFor="state" style={labelStyle}>
          Current State of Residence *
        </label>
        <input
          id="state"
          type="text"
          style={inputStyle}
          aria-required="true"
          placeholder="e.g., Washington"
          autoComplete="address-level1"
          {...register("state")}
        />
        {errors.state && (
          <p style={errorStyle} role="alert">{errors.state.message}</p>
        )}
      </div>

      {/* Why statement */}
      <div>
        <label htmlFor="whyStatement" style={labelStyle}>
          Why do you want this role? *
        </label>
        <textarea
          id="whyStatement"
          rows={5}
          style={{
            ...inputStyle,
            resize: "vertical",
            lineHeight: 1.65,
          }}
          aria-required="true"
          aria-describedby={errors.whyStatement ? "why-error" : "why-hint"}
          placeholder="Minimum 50 characters. Be direct."
          {...register("whyStatement")}
        />
        <p
          id="why-hint"
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: "0.6875rem",
            color: "var(--patrol)",
            marginTop: "0.375rem",
            letterSpacing: "0.04em",
          }}
        >
          No minimum word count. We want honest, not long.
        </p>
        {errors.whyStatement && (
          <p id="why-error" style={errorStyle} role="alert">
            {errors.whyStatement.message}
          </p>
        )}
      </div>

      {/* References */}
      <div>
        <p style={{ ...labelStyle, marginBottom: "1rem" }}>References (2 required)</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label htmlFor="ref1name" style={{ ...labelStyle, fontSize: "0.625rem" }}>
                Reference 1 — Name *
              </label>
              <input
                id="ref1name"
                type="text"
                style={inputStyle}
                aria-required="true"
                {...register("reference1Name")}
              />
              {errors.reference1Name && (
                <p style={errorStyle} role="alert">{errors.reference1Name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="ref1contact" style={{ ...labelStyle, fontSize: "0.625rem" }}>
                Reference 1 — Email or Phone *
              </label>
              <input
                id="ref1contact"
                type="text"
                style={inputStyle}
                aria-required="true"
                {...register("reference1Contact")}
              />
              {errors.reference1Contact && (
                <p style={errorStyle} role="alert">{errors.reference1Contact.message}</p>
              )}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label htmlFor="ref2name" style={{ ...labelStyle, fontSize: "0.625rem" }}>
                Reference 2 — Name *
              </label>
              <input
                id="ref2name"
                type="text"
                style={inputStyle}
                aria-required="true"
                {...register("reference2Name")}
              />
              {errors.reference2Name && (
                <p style={errorStyle} role="alert">{errors.reference2Name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="ref2contact" style={{ ...labelStyle, fontSize: "0.625rem" }}>
                Reference 2 — Email or Phone *
              </label>
              <input
                id="ref2contact"
                type="text"
                style={inputStyle}
                aria-required="true"
                {...register("reference2Contact")}
              />
              {errors.reference2Contact && (
                <p style={errorStyle} role="alert">{errors.reference2Contact.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stability affirmation */}
      <div>
        <label
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.875rem",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            style={{
              accentColor: "var(--flare)",
              width: "18px",
              height: "18px",
              flexShrink: 0,
              marginTop: "0.125rem",
            }}
            aria-required="true"
            aria-describedby={errors.stabilityAffirmation ? "stability-error" : undefined}
            {...register("stabilityAffirmation")}
          />
          <span
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "0.9375rem",
              lineHeight: 1.65,
              color: "var(--charcoal)",
            }}
          >
            I affirm I am currently stable, not in active crisis, and have the
            support structure to sustain this role.
          </span>
        </label>
        {errors.stabilityAffirmation && (
          <p id="stability-error" style={{ ...errorStyle, marginTop: "0.5rem" }} role="alert">
            {errors.stabilityAffirmation.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          backgroundColor: isSubmitting ? "var(--patrol)" : "var(--flare)",
          color: "var(--bone)",
          fontFamily: "var(--font-ibm-plex-sans), sans-serif",
          fontSize: "0.9375rem",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          padding: "1rem 2rem",
          border: "none",
          borderRadius: "2px",
          cursor: isSubmitting ? "not-allowed" : "pointer",
          alignSelf: "flex-start",
          transition: "background-color 0.2s, opacity 0.2s",
        }}
        className="hover:opacity-90"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
