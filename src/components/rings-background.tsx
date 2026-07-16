/**
 * Anneaux concentriques — ornement signature de la refonte clair bleu roi.
 * Reprend l'imaginaire du logo (K.K cerclé) et remplace le fond à polygones.
 *
 * Deux groupes tournent en sens inverse, à des vitesses très lentes (140s / 200s) :
 * le mouvement doit être perçu comme une dérive, jamais comme une animation.
 * Purement décoratif — aria-hidden, et immobile si l'utilisateur refuse le mouvement.
 */
export function RingsBackground({ variant = "hero" }: { variant?: "hero" | "cta" }) {
  const stroke = "var(--accent-solid)";

  return (
    <div className="pointer-events-none absolute inset-0 opacity-90" aria-hidden="true">
      <svg viewBox="0 0 1000 1000" fill="none" className="block h-full w-full">
        <g className="origin-center motion-safe:animate-[spin_140s_linear_infinite]" stroke={stroke}>
          {variant === "hero" ? (
            <>
              <circle cx="500" cy="500" r="470" strokeOpacity=".22" strokeWidth="1" />
              <circle cx="500" cy="500" r="470" strokeOpacity=".3" strokeWidth="9" strokeDasharray="1 40" />
              <circle cx="500" cy="500" r="330" strokeOpacity=".18" strokeWidth="1" strokeDasharray="4 10" />
            </>
          ) : (
            <>
              <circle cx="500" cy="500" r="460" strokeOpacity=".18" strokeWidth="1" />
              <circle cx="500" cy="500" r="460" strokeOpacity=".26" strokeWidth="8" strokeDasharray="1 34" />
            </>
          )}
        </g>

        <g
          className="origin-center motion-safe:animate-[spin_200s_linear_infinite_reverse]"
          stroke={stroke}
        >
          {variant === "hero" ? (
            <>
              <circle cx="500" cy="500" r="400" strokeOpacity=".14" strokeWidth="1" />
              <circle cx="500" cy="500" r="400" strokeOpacity=".28" strokeWidth="7" strokeDasharray="1 26" />
              <circle cx="500" cy="500" r="255" strokeOpacity=".24" strokeWidth="6" strokeDasharray="1 18" />
              <circle cx="500" cy="500" r="255" strokeOpacity=".2" strokeWidth="1" />
            </>
          ) : (
            <>
              <circle cx="500" cy="500" r="340" strokeOpacity=".14" strokeWidth="1" strokeDasharray="4 12" />
              <circle cx="500" cy="500" r="230" strokeOpacity=".2" strokeWidth="6" strokeDasharray="1 20" />
            </>
          )}
        </g>

        {variant === "hero" && (
          <g fill={stroke}>
            <circle cx="500" cy="30" r="3" fillOpacity=".5" />
            <circle cx="500" cy="100" r="2.5" fillOpacity=".4" />
            <circle cx="930" cy="500" r="2.5" fillOpacity=".4" />
            <circle cx="70" cy="500" r="2.5" fillOpacity=".4" />
            <circle cx="500" cy="970" r="3" fillOpacity=".5" />
          </g>
        )}
      </svg>
    </div>
  );
}
