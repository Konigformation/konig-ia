import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Confidentialité & RGPD | ${siteConfig.name}`,
  robots: { index: false, follow: true },
};

const dataTable = [
  {
    source: "Formulaire « Audit IA » (réservation)",
    data: "Nom, prénom, email, téléphone, situation professionnelle, objectif / commentaire libre",
    purpose: "Prise de contact, qualification et organisation de l'Audit IA gratuit",
  },
  {
    source: "Formulaire « Guide gratuit »",
    data: "Prénom, email",
    purpose: "Envoi du guide au format PDF et, avec votre accord, d'e-mails de suivi",
  },
  {
    source: "Navigation sur le Site",
    data: "Adresse IP, pages consultées, type de terminal, cookies techniques",
    purpose: "Fonctionnement technique du Site et mesure d'audience anonymisée",
  },
];

export default function Confidentialite() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-36 pb-24">
        <Container className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">
            Politique de confidentialité
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
          </p>

          <div className="mt-10 flex flex-col gap-10 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                1. Préambule et responsable de traitement
              </h2>
              <p className="mt-3">
                {siteConfig.name}{" "}(Konig Formation), organisme de formation certifié
                Qualiopi, SIREN 908 180 284, dont le siège social est situé 125 boulevard
                du Général Koenig, 92200 Neuilly-sur-Seine, est responsable du traitement
                des données à caractère personnel collectées via le présent site
                {" "}
                {siteConfig.url}
                {" "}(ci-après « le Site »).
              </p>
              <p className="mt-3">
                La présente politique décrit, conformément au Règlement (UE) 2016/679 du
                27 avril 2016 (« RGPD ») et à la loi n° 78-17 du 6 janvier 1978 modifiée,
                la manière dont nous collectons, utilisons, conservons et protégeons vos
                données personnelles lorsque vous visitez le Site, réservez un Audit IA
                ou téléchargez notre guide gratuit.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                2. Données collectées
              </h2>
              <p className="mt-3">
                Nous collectons uniquement les données que vous nous transmettez
                volontairement via les formulaires du Site, ainsi que quelques données
                techniques nécessaires au bon fonctionnement du Site :
              </p>
              <div className="mt-4 overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[520px] border-collapse text-left text-xs">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="p-3 font-medium text-foreground">Origine</th>
                      <th className="p-3 font-medium text-foreground">Données concernées</th>
                      <th className="p-3 font-medium text-foreground">Finalité</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTable.map((row, i) => (
                      <tr key={row.source} className={i !== dataTable.length - 1 ? "border-b border-border" : ""}>
                        <td className="p-3 align-top">{row.source}</td>
                        <td className="p-3 align-top">{row.data}</td>
                        <td className="p-3 align-top">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                Nous ne collectons aucune donnée dite « sensible » au sens de
                l&apos;article 9 du RGPD (origine raciale, opinions politiques,
                convictions religieuses, données de santé, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                3. Finalités et bases légales du traitement
              </h2>
              <ul className="mt-3 flex flex-col gap-2.5">
                <li>
                  <strong className="text-foreground">Organiser votre Audit IA</strong> et
                  vous recontacter : base légale — mesures précontractuelles prises à
                  votre demande (article 6.1.b du RGPD).
                </li>
                <li>
                  <strong className="text-foreground">Vous envoyer le guide gratuit</strong>
                  {" "}et, le cas échéant, des contenus liés à l&apos;automatisation par
                  IA : base légale — consentement (article 6.1.a), révocable à tout
                  moment.
                </li>
                <li>
                  <strong className="text-foreground">Gérer la relation contractuelle</strong>
                  {" "}avec les participants à nos formations (convention, feuilles de
                  présence, attestations) : base légale — exécution du contrat de
                  formation et obligations légales afférentes (article 6.1.b et 6.1.c).
                </li>
                <li>
                  <strong className="text-foreground">Assurer la sécurité et le bon
                  fonctionnement du Site</strong>, prévenir la fraude : base légale —
                  intérêt légitime (article 6.1.f).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                4. Destinataires des données
              </h2>
              <p className="mt-3">
                Vos données sont destinées aux équipes de {siteConfig.name}
                {" "}habilitées à
                les traiter (accueil, pédagogie, administratif). Elles peuvent également
                être transmises à des prestataires techniques agissant en qualité de
                sous-traitants au sens de l&apos;article 28 du RGPD, notamment pour
                l&apos;hébergement du Site, l&apos;envoi d&apos;e-mails transactionnels
                (par exemple Brevo) ou la gestion de nos automatisations internes (par
                exemple Make ou n8n). Ces prestataires n&apos;utilisent vos données que
                pour l&apos;exécution des prestations qui leur sont confiées et dans le
                respect de la réglementation applicable.
              </p>
              <p className="mt-3">
                Certains de ces prestataires peuvent être situés hors de l&apos;Union
                européenne (notamment aux États-Unis). Dans ce cas, nous nous assurons de
                l&apos;existence de garanties appropriées (clauses contractuelles types
                de la Commission européenne, décision d&apos;adéquation, ou mécanisme
                équivalent) encadrant ce transfert.
              </p>
              <p className="mt-3">
                Vos données ne sont en aucun cas vendues ou louées à des tiers à des fins
                commerciales.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                5. Durée de conservation
              </h2>
              <ul className="mt-3 flex flex-col gap-2.5">
                <li>
                  Données issues du formulaire d&apos;Audit IA : conservées 3 ans à
                  compter du dernier contact si aucune formation n&apos;est engagée, puis
                  supprimées ou anonymisées.
                </li>
                <li>
                  Données issues du téléchargement du guide gratuit : conservées jusqu&apos;à
                  votre désinscription, et au maximum 3 ans à compter du dernier contact.
                </li>
                <li>
                  Données liées à un contrat de formation : conservées pendant la durée
                  nécessaire au respect de nos obligations légales, comptables et
                  fiscales (jusqu&apos;à 10 ans pour les pièces comptables).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                6. Sécurité des données
              </h2>
              <p className="mt-3">
                Nous mettons en œuvre les mesures techniques et organisationnelles
                appropriées (chiffrement des échanges en HTTPS, accès restreint aux
                données, choix de prestataires présentant des garanties suffisantes) afin
                de préserver la sécurité, l&apos;intégrité et la confidentialité de vos
                données personnelles, et d&apos;empêcher qu&apos;elles soient
                déformées, endommagées ou communiquées à des tiers non autorisés.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                7. Vos droits
              </h2>
              <p className="mt-3">
                Conformément au RGPD, vous disposez des droits suivants sur vos données
                personnelles :
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                <li>Droit d&apos;accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d&apos;opposition</li>
                <li>Droit de retirer votre consentement à tout moment</li>
                <li>Droit de définir des directives post-mortem</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, il vous suffit de nous écrire à{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                  {siteConfig.email}
                </a>{" "}
                en précisant votre nom, prénom et l&apos;adresse email utilisée sur le
                Site. Une preuve d&apos;identité pourra vous être demandée en cas de doute
                raisonnable sur votre identité. Nous nous engageons à répondre à votre
                demande dans un délai maximum d&apos;un mois.
              </p>
              <p className="mt-3">
                Si vous estimez, après nous avoir contactés, que vos droits ne sont pas
                respectés, vous pouvez adresser une réclamation à la Commission Nationale
                de l&apos;Informatique et des Libertés (CNIL) :{" "}
                <a
                  href="https://www.cnil.fr/fr/plaintes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  www.cnil.fr/fr/plaintes
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                8. Cookies et traceurs
              </h2>
              <p className="mt-3">
                Le Site utilise uniquement, à ce jour, des cookies strictement
                nécessaires à son fonctionnement (par exemple la mémorisation de
                l&apos;état de votre progression dans le formulaire d&apos;Audit IA).
                Ces cookies ne nécessitent pas de consentement préalable au titre de
                l&apos;article 82 de la loi Informatique et Libertés.
              </p>
              <p className="mt-3">
                Si des cookies de mesure d&apos;audience ou des traceurs publicitaires
                venaient à être ajoutés ultérieurement, un bandeau de consentement
                conforme aux recommandations de la CNIL vous permettrait
                d&apos;accepter ou de refuser leur dépôt avant tout traitement, et la
                présente politique serait mise à jour en conséquence.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                9. Mineurs
              </h2>
              <p className="mt-3">
                Le Site s&apos;adresse à un public professionnel (dirigeants,
                indépendants, salariés). Il n&apos;est pas destiné aux mineurs et nous ne
                collectons pas sciemment de données concernant des personnes de moins de
                16 ans.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                10. Modification de la présente politique
              </h2>
              <p className="mt-3">
                Nous pouvons être amenés à modifier la présente politique de
                confidentialité, notamment pour nous conformer à toute évolution
                réglementaire, jurisprudentielle ou technique. Nous vous invitons à la
                consulter régulièrement. La date de dernière mise à jour figure en haut de
                cette page.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                11. Contact
              </h2>
              <p className="mt-3">
                Pour toute question relative à la présente politique de confidentialité
                ou à l&apos;exercice de vos droits, contactez-nous à l&apos;adresse{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <p className="rounded-lg border border-border bg-muted/30 p-4 text-xs">
              Cette politique reflète les traitements de données actuellement mis en
              œuvre par le Site (formulaires d&apos;Audit IA et de guide gratuit). Elle
              devra être mise à jour si de nouveaux outils sont ajoutés (mesure
              d&apos;audience, publicité, nouveau CRM...) et gagnera à être relue par un
              professionnel du droit avant la mise en ligne publique du Site.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
