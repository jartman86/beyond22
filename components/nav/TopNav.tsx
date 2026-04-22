"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

type SubItem = {
  label: string;
  href: string;
  description: string;
};

type NavItem = {
  label: string;
  href?: string;
  variant?: "highlight" | "button";
  subItems?: SubItem[];
  sectionNumber: string;
};

const navItems: NavItem[] = [
  {
    label: "Resources",
    sectionNumber: "01",
    subItems: [
      {
        label: "Crisis Intervention Team",
        href: "/resources/crisis-intervention",
        description: "Immediate resources for veterans in active crisis.",
      },
      {
        label: "Support",
        href: "/resources/support",
        description: "Long-term support for veterans and families.",
      },
    ],
  },
  {
    label: "Mental Health Services",
    sectionNumber: "02",
    subItems: [
      {
        label: "Veteran Services",
        href: "/mental-health/veteran-services",
        description: "Vetted referral directory of VA-familiar providers.",
      },
      {
        label: "Counseling",
        href: "/mental-health/counseling",
        description: "Individual and group counseling resources.",
      },
      {
        label: "Family Therapy + Crisis Intervention",
        href: "/mental-health/family-therapy",
        description: "For the whole family — not just the veteran.",
      },
      {
        label: "Short Term Housing",
        href: "/mental-health/short-term-housing",
        description: "Safe housing during crisis and transition.",
      },
      {
        label: "Continuum of Care",
        href: "/mental-health/continuum-of-care",
        description: "Coordinated care across the recovery arc.",
      },
    ],
  },
  {
    label: "Programs",
    sectionNumber: "03",
    subItems: [
      {
        label: "Camps",
        href: "/programs/camps",
        description: "Structured wilderness experiences.",
      },
      {
        label: "Excursions",
        href: "/programs/excursions",
        description: "Purpose-driven field expeditions.",
      },
      {
        label: "Retreats",
        href: "/programs/retreats",
        description: "Quiet, intentional recovery time.",
      },
      {
        label: "Family Camps",
        href: "/programs/family-camps",
        description: "Healing for veterans and their families together.",
      },
      {
        label: "Psychedelic Treatment Centers",
        href: "/programs/psychedelic-treatment",
        description: "Referral directory only. Vetted legal programs.",
      },
      {
        label: "Peptide Therapy + Labs",
        href: "/programs/peptide-therapy",
        description: "Emerging therapeutic protocols.",
      },
      {
        label: "Health",
        href: "/programs/health",
        description: "Physical health and preventive care resources.",
      },
      {
        label: "Life Coaching",
        href: "/programs/life-coaching",
        description: "Purpose, transition, and identity beyond service.",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    sectionNumber: "04",
  },
  {
    label: "Patriot Alert",
    href: "/patriot-alert",
    sectionNumber: "05",
    variant: "highlight",
  },
  {
    label: "Donate",
    href: "/donate",
    sectionNumber: "06",
    variant: "button",
  },
];

export function TopNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenu = useCallback(() => {
    setOpenMenu(null);
  }, []);

  useEffect(() => {
    closeMenu();
    setMobileOpen(false);
  }, [pathname, closeMenu]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeMenu();
        setMobileOpen(false);
      }
    }
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    }
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  function handleMouseEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }

  const activeMenu = navItems.find((item) => item.label === openMenu);

  return (
    <>
      {/* Overlay */}
      {openMenu && (
        <div
          className="mega-menu-overlay active"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}

      <header
        ref={navRef}
        style={{
          backgroundColor: "var(--bone)",
          borderBottom: "1px solid color-mix(in srgb, var(--charcoal) 12%, transparent)",
          height: "72px",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Beyond22 — Home"
            className="flex items-center gap-3 flex-shrink-0"
          >
            <span
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--charcoal)",
                lineHeight: 1,
              }}
            >
              Beyond<span style={{ color: "var(--flare)" }}>22</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.variant === "button") {
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    style={{
                      backgroundColor: "var(--flare)",
                      color: "var(--bone)",
                      fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      padding: "0.5rem 1.25rem",
                      borderRadius: "2px",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      marginLeft: "0.5rem",
                    }}
                    className="hover:opacity-90 transition-opacity"
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.subItems) {
                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                    className="relative"
                  >
                    <button
                      aria-expanded={openMenu === item.label}
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenMenu(openMenu === item.label ? null : item.label)
                      }
                      style={{
                        fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        color: openMenu === item.label ? "var(--flare)" : "var(--charcoal)",
                        letterSpacing: "0.01em",
                        padding: "0.5rem 0.75rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                      className="hover:opacity-70 transition-opacity"
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        style={{
                          transform: openMenu === item.label ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  style={{
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: item.variant === "highlight" ? 600 : 500,
                    color:
                      item.variant === "highlight"
                        ? "var(--flare)"
                        : pathname === item.href
                        ? "var(--flare)"
                        : "var(--charcoal)",
                    letterSpacing: item.variant === "highlight" ? "0.04em" : "0.01em",
                    textTransform: item.variant === "highlight" ? "uppercase" : "none",
                    padding: "0.5rem 0.75rem",
                    textDecoration: "none",
                  }}
                  className="hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{ color: "var(--charcoal)" }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mega-menu dropdown */}
        {openMenu && activeMenu?.subItems && (
          <div
            onMouseEnter={() => handleMouseEnter(openMenu)}
            onMouseLeave={handleMouseLeave}
            style={{
              position: "absolute",
              top: "72px",
              left: 0,
              right: 0,
              backgroundColor: "var(--paper)",
              borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
              borderBottom: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
              zIndex: 50,
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-5">
                {activeMenu.subItems.map((sub, i) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={closeMenu}
                    className="group block"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="label-mono flex-shrink-0 mt-0.5"
                        style={{
                          fontFamily: "var(--font-ibm-plex-mono), monospace",
                          color: "var(--brass)",
                          fontSize: "0.625rem",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-fraunces), serif",
                            fontSize: "0.9375rem",
                            fontWeight: 500,
                            color: "var(--charcoal)",
                            lineHeight: 1.3,
                            marginBottom: "0.25rem",
                          }}
                          className="group-hover:text-flare transition-colors"
                        >
                          {sub.label}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                            fontSize: "0.75rem",
                            color: "var(--patrol)",
                            lineHeight: 1.5,
                          }}
                        >
                          {sub.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "var(--paper)",
            borderBottom: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
            position: "sticky",
            top: "72px",
            zIndex: 39,
          }}
        >
          <nav aria-label="Mobile navigation" className="max-w-7xl mx-auto px-4 py-6">
            {navItems.map((item) => (
              <div key={item.label} className="border-b last:border-b-0"
                style={{ borderColor: "color-mix(in srgb, var(--charcoal) 8%, transparent)" }}>
                {item.href && !item.subItems ? (
                  <Link
                    href={item.href}
                    className="block py-3"
                    style={{
                      fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                      fontSize: "1rem",
                      fontWeight: item.variant === "highlight" || item.variant === "button" ? 600 : 400,
                      color:
                        item.variant === "highlight" || item.variant === "button"
                          ? "var(--flare)"
                          : "var(--charcoal)",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <details className="group">
                    <summary
                      className="flex items-center justify-between py-3 cursor-pointer"
                      style={{
                        fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                        fontSize: "1rem",
                        color: "var(--charcoal)",
                        listStyle: "none",
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className="group-open:rotate-180 transition-transform"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="pb-3 pl-4">
                      {item.subItems?.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block py-2"
                          style={{
                            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                            fontSize: "0.875rem",
                            color: "var(--patrol)",
                            textDecoration: "none",
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
