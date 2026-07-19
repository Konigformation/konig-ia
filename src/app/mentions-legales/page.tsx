import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Mentions légales | ${siteConfig.name}`,
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-36 pb-24">
        <Container className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">Mentions légales</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
          </p>

          <div className="mt-10 flex flex-col gap-10 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                1. Éditeur du site
              </h2>
              <p className="mt-3">
                Le présent site, accessible à l&apos;adresse {siteConfig.url}
                {" "}(ci-après « le Site »), est édité par :
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                <li>
                  <strong className="text-foreground">Konig Formation</strong> (nom
                  commercial exploité sous la marque « {siteConfig.name}
                  {" "}»)
                </li>
                <li>Forme juridique : SARL (Société à responsabilité limitée)</li>
                <li>Capital social : 1 000 €</li>
                <li>Siège social : 125 boulevard du Général Koenig, 92200 Neuilly-sur-Seine, France</li>
                <li>Numéro SIRET : 908 180 284 00014 (SIREN 908 180 284)</li>
                <li>
                  Numéro de déclaration d&apos;activité (organisme de formation) :
                  11 92 24881 92 — déclaration enregistrée auprès du préfet de région
                  compétent. Cet enregistrement ne vaut pas agrément de l&apos;État.
                </li>
                <li>Numéro de TVA intracommunautaire : [à préciser]</li>
                <li>Directeur de la publication : Alexis Romito, gérant</li>
                <li>
                  Contact :{" "}
                  <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
              <p className="mt-3">
                {siteConfig.name}{" "}est un organisme de formation certifié Qualiopi au
                titre de la catégorie « Actions de formation » (certificat CAPCERT n°
                CAP0865,
                valable jusqu&apos;au 20 juillet 2028). La certification qualité a été
                délivrée au titre des actions de formation. Cette certification ne saurait
                être interprétée comme un gage de la performance ni de la conformité aux
                exigences réglementaires applicables.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                2. Hébergement
              </h2>
              <p className="mt-3">Le Site est hébergé par :</p>
              <ul className="mt-3 flex flex-col gap-1.5">
                <li>Vercel Inc.</li>
                <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li>
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    vercel.com
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                3. Propriété intellectuelle
              </h2>
              <p className="mt-3">
                L&apos;ensemble des éléments composant le Site (textes, graphismes, logos,
                icônes, structure, mise en page, animations, code source, contenus
                pédagogiques et documents téléchargeables) est, sauf mention contraire, la
                propriété exclusive de {siteConfig.name}
                {" "}ou de ses partenaires, et est
                protégé par le droit d&apos;auteur, le droit des marques et, plus
                généralement, par le droit de la propriété intellectuelle.
              </p>
              <p className="mt-3">
                Toute reproduction, représentation, modification, publication, adaptation
                ou exploitation de tout ou partie des éléments du Site, quel que soit le
                moyen ou le procédé utilisé, est interdite sans l&apos;autorisation écrite
                préalable de {siteConfig.name}, hormis les exceptions prévues par
                l&apos;article L. 122-5 du Code de la propriété intellectuelle (copie
                réservée à l&apos;usage privé du copiste, courtes citations, etc.).
              </p>
              <p className="mt-3">
                Les marques et logos des partenaires et financeurs mentionnés sur le Site
                (Qualiopi, France Compétences, France Travail, OPCO, FAF, etc.) demeurent
                la propriété de leurs titulaires respectifs et sont reproduits à titre
                purement informatif, dans le respect de leurs conditions d&apos;usage.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                4. Liens hypertextes
              </h2>
              <p className="mt-3">
                Le Site peut contenir des liens hypertextes vers d&apos;autres sites
                internet ou ressources (partenaires, organismes financeurs, réseaux
                sociaux). {siteConfig.name}
                {" "}n&apos;exerce aucun contrôle sur ces sites
                tiers et décline toute responsabilité quant à leur contenu, leur
                disponibilité ou leurs pratiques en matière de protection des données.
              </p>
              <p className="mt-3">
                Toute création de lien hypertexte vers le Site est soumise à
                l&apos;accord préalable de {siteConfig.name}, sauf pour les liens simples
                renvoyant vers la page d&apos;accueil.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                5. Données personnelles
              </h2>
              <p className="mt-3">
                Le traitement des données à caractère personnel collectées via le Site
                (formulaire de réservation d&apos;Audit IA, téléchargement du guide
                offert) est décrit en détail dans notre{" "}
                <a href="/confidentialite" className="underline underline-offset-2">
                  politique de confidentialité
                </a>
                , conforme au Règlement (UE) 2016/679 (« RGPD ») et à la loi n° 78-17 du 6
                janvier 1978 modifiée relative à l&apos;informatique, aux fichiers et aux
                libertés.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                6. Cookies
              </h2>
              <p className="mt-3">
                Le Site n&apos;utilise, à ce jour, que des cookies strictement
                nécessaires à son fonctionnement technique (mémorisation de vos
                préférences de navigation). Aucun cookie de mesure d&apos;audience ou de
                publicité tiers n&apos;est déposé sans votre consentement préalable. Pour
                plus de détails, consultez la section « Cookies et traceurs » de notre{" "}
                <a href="/confidentialite" className="underline underline-offset-2">
                  politique de confidentialité
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                7. Limitation de responsabilité
              </h2>
              <p className="mt-3">
                {siteConfig.name}{" "}met tout en œuvre pour assurer l&apos;exactitude et
                la
                mise à jour des informations diffusées sur le Site, dont elle se réserve
                le droit de corriger le contenu à tout moment et sans préavis. Toutefois,
                {" "}
                {siteConfig.name}
                {" "}ne peut garantir l&apos;exactitude, la précision ou
                l&apos;exhaustivité des informations mises à disposition sur le Site et
                décline toute responsabilité pour toute imprécision, inexactitude ou
                omission, ainsi que pour tout dommage résultant d&apos;une intrusion
                frauduleuse d&apos;un tiers ayant entraîné une modification des
                informations mises à disposition sur le Site.
              </p>
              <p className="mt-3">
                Le contenu du Site (présentation de l&apos;Audit IA et des formations) a
                une visée informative et commerciale ; il ne constitue en aucun cas un
                engagement contractuel avant la formalisation d&apos;une convention ou
                d&apos;un contrat de formation dédié.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                8. Droit applicable et juridiction compétente
              </h2>
              <p className="mt-3">
                Les présentes mentions légales sont soumises au droit français. En cas de
                litige et à défaut de résolution amiable, les tribunaux français seront
                seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                9. Médiation de la consommation
              </h2>
              <p className="mt-3">
                Conformément aux articles L. 616-1 et R. 616-1 du Code de la
                consommation, {siteConfig.name}
                {" "}propose un dispositif de médiation de la
                consommation pour les personnes physiques agissant à des fins non
                professionnelles. L&apos;entité de médiation retenue est CNPM Médiation
                Consommation, 27 avenue de la Libération, 42400 Saint-Chamond (
                <a
                  href="https://www.cnpm-mediation-consommation.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  www.cnpm-mediation-consommation.eu
                </a>
                ). Ce dispositif de médiation peut être saisi après démarche préalable
                écrite auprès de nos services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                10. Contact
              </h2>
              <p className="mt-3">
                Pour toute question relative aux présentes mentions légales, vous pouvez
                nous contacter à l&apos;adresse{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <p className="rounded-lg border border-border bg-muted/30 p-4 text-xs">
              Les mentions entre crochets [ ] doivent être complétées avec les informations
              exactes de votre structure (hébergeur, directeur de publication, numéro de
              TVA intracommunautaire) avant la mise en ligne publique du Site. Nous
              recommandons une relecture par un professionnel du droit avant publication.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
