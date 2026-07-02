import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Conditions Générales de Vente | ${siteConfig.name}`,
  robots: { index: false, follow: true },
};

export default function Cgv() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-36 pb-24">
        <Container className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">
            Conditions Générales de Vente (CGV)
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
          </p>

          <div className="mt-10 flex flex-col gap-10 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                1. Objet du contrat
              </h2>
              <p className="mt-3">
                Les présentes Conditions Générales de Vente (CGV) ont pour objet de
                définir les conditions dans lesquelles la société SARL KONIG conçoit,
                commercialise et dispense des prestations de formation professionnelle,
                de conseil, d&apos;accompagnement, de coaching, d&apos;évaluation,
                d&apos;audit et plus généralement toute prestation entrant dans son
                champ d&apos;activité.
              </p>
              <p className="mt-3">
                SARL KONIG propose des formations en présentiel, à distance
                (visioconférence), en format hybride ou sous toute autre modalité
                pédagogique qu&apos;elle jugera adaptée. Ces prestations peuvent être
                réalisées directement par SARL KONIG ou avec le concours de
                partenaires, intervenants, sous-traitants ou experts sélectionnés par
                elle.
              </p>
              <p className="mt-3">Dans les présentes CGV, il est convenu de désigner par :</p>
              <ul className="mt-3 flex flex-col gap-2">
                <li>
                  <strong className="text-foreground">Organisme de formation</strong> :
                  la société SARL KONIG ;
                </li>
                <li>
                  <strong className="text-foreground">Client</strong> : toute personne
                  physique ou morale qui commande une prestation auprès de SARL KONIG ;
                </li>
                <li>
                  <strong className="text-foreground">Stagiaire ou Apprenant</strong> :
                  toute personne physique participant à une formation ;
                </li>
                <li>
                  <strong className="text-foreground">Formation</strong> : toute action
                  de formation, accompagnement, coaching, atelier, séminaire,
                  conférence ou prestation assimilée proposée par SARL KONIG ;
                </li>
                <li>
                  <strong className="text-foreground">CGV</strong> : les présentes
                  Conditions Générales de Vente.
                </li>
              </ul>
              <p className="mt-3">
                Les présentes CGV s&apos;appliquent à l&apos;ensemble des prestations
                proposées par SARL KONIG. Toute commande, inscription, signature de
                devis, de convention ou de contrat de formation emporte l&apos;adhésion
                pleine et entière du Client aux présentes CGV, lesquelles prévalent sur
                tout autre document émanant du Client, notamment ses éventuelles
                conditions générales d&apos;achat, sauf accord écrit exprès de SARL
                KONIG.
              </p>
              <p className="mt-3">
                Le Client reconnaît avoir reçu avant la conclusion du contrat
                l&apos;ensemble des informations nécessaires lui permettant de
                s&apos;engager en toute connaissance de cause sur la nature, le
                contenu, les modalités et les conditions financières de la prestation.
              </p>
              <p className="mt-3">
                Les informations, programmes, contenus pédagogiques, durées, modalités
                d&apos;évaluation, moyens techniques et calendriers communiqués par
                SARL KONIG sont fournis à titre indicatif. SARL KONIG se réserve le
                droit de les adapter, de les compléter ou de les modifier lorsque ces
                adaptations sont rendues nécessaires par des contraintes pédagogiques,
                techniques, réglementaires, organisationnelles ou liées à
                l&apos;amélioration continue de ses prestations, sans que cela ne
                puisse constituer un motif d&apos;annulation ou de remboursement pour
                le Client, sous réserve que les objectifs essentiels de la prestation
                soient maintenus.
              </p>
              <p className="mt-3">
                Les prestations fournies par SARL KONIG constituent une obligation de
                moyens. SARL KONIG s&apos;engage à mettre en œuvre l&apos;ensemble des
                moyens humains, techniques et pédagogiques raisonnablement nécessaires
                à la bonne exécution de ses prestations, sans garantie de résultat ni
                d&apos;obtention d&apos;une certification, d&apos;un diplôme, d&apos;un
                emploi, d&apos;une promotion ou de tout autre avantage professionnel
                attendu par le Client ou le Stagiaire.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                2. Commande et modalités de paiement
              </h2>
              <p className="mt-3">
                Toute commande de prestation de formation fait l&apos;objet d&apos;un
                devis, d&apos;une convention de formation, d&apos;un contrat de
                formation professionnelle ou de tout autre document contractuel établi
                par SARL KONIG.
              </p>
              <p className="mt-3">
                La commande est réputée ferme et définitive à compter de la réception
                par SARL KONIG du document contractuel dûment complété, daté et signé
                par le Client, accompagné, le cas échéant, du règlement demandé ou de
                tout justificatif de prise en charge.
              </p>
              <p className="mt-3">
                SARL KONIG se réserve le droit de refuser toute inscription ou commande
                en cas de dossier incomplet, de défaut de paiement antérieur,
                d&apos;informations inexactes fournies par le Client ou pour tout autre
                motif légitime.
              </p>
              <p className="mt-3">
                Les tarifs applicables sont ceux en vigueur à la date de signature du
                devis ou du contrat. Ils sont exprimés en euros. Lorsque SARL KONIG
                bénéficie du régime de franchise en base de TVA, les prestations sont
                facturées conformément aux dispositions de l&apos;article 293 B du Code
                général des impôts. Dans le cas contraire, les prix sont majorés de la
                TVA au taux légal en vigueur.
              </p>
              <p className="mt-3">
                Sauf stipulation contraire figurant sur le devis ou la convention de
                formation, le règlement est exigible à la commande et doit être
                effectué par carte bancaire, virement bancaire ou tout autre moyen de
                paiement accepté par SARL KONIG.
              </p>
              <p className="mt-3">
                SARL KONIG se réserve le droit de suspendre l&apos;accès à une
                formation, de refuser l&apos;entrée en formation ou de suspendre
                l&apos;exécution de toute prestation tant que les sommes dues
                n&apos;ont pas été intégralement réglées.
              </p>
              <p className="mt-3">
                En cas de prise en charge totale ou partielle de la formation par un
                organisme tiers (OPCO, employeur, France Travail, CPF ou tout autre
                financeur), il appartient au Client d&apos;effectuer l&apos;ensemble
                des démarches administratives nécessaires à l&apos;obtention de cette
                prise en charge avant le début de la formation et de s&apos;assurer de
                son acceptation.
              </p>
              <p className="mt-3">
                En cas de refus, d&apos;annulation, de prise en charge partielle ou de
                non-paiement par l&apos;organisme financeur, pour quelque cause que ce
                soit, les sommes restant dues deviennent immédiatement exigibles
                auprès du Client, qui demeure seul responsable du paiement intégral
                des prestations commandées.
              </p>
              <p className="mt-3">
                Toute somme non réglée à son échéance donnera lieu, sans mise en
                demeure préalable, à l&apos;application de pénalités de retard
                calculées au taux légal en vigueur majoré de dix points, ainsi
                qu&apos;au paiement d&apos;une indemnité forfaitaire pour frais de
                recouvrement de quarante (40) euros, conformément aux dispositions des
                articles L.441-10 et D.441-5 du Code de commerce lorsque le Client agit
                à titre professionnel. Les frais engagés pour le recouvrement de
                créances demeurent à la charge du Client.
              </p>
              <p className="mt-3">
                À l&apos;issue de la formation, SARL KONIG remet au Client ou au
                Stagiaire, selon le cas, les documents administratifs prévus par la
                réglementation en vigueur, notamment les attestations de présence,
                attestations de fin de formation et feuilles d&apos;émargement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                3. Droit de rétractation
              </h2>
              <p className="mt-3">
                Conformément aux dispositions des articles L.221-18 et suivants du Code
                de la consommation, lorsque le Client est un consommateur au sens de la
                réglementation en vigueur, il dispose d&apos;un délai de quatorze (14)
                jours calendaires à compter de la conclusion du contrat pour exercer
                son droit de rétractation, sans avoir à motiver sa décision ni à
                supporter d&apos;autres coûts que ceux prévus par la loi.
              </p>
              <p className="mt-3">
                Pour exercer ce droit, le Client doit adresser sa demande par écrit à
                l&apos;adresse électronique suivante :{" "}
                <a href="mailto:konig.formation@gmail.com" className="underline underline-offset-2">
                  konig.formation@gmail.com
                </a>{" "}
                ou par tout autre moyen permettant d&apos;établir de manière certaine
                la date de son envoi.
              </p>
              <p className="mt-3">
                Lorsque le Client demande expressément le commencement de
                l&apos;exécution de la prestation avant l&apos;expiration du délai de
                rétractation, il reconnaît et accepte :
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                <li>que la formation puisse débuter immédiatement ;</li>
                <li>
                  qu&apos;en cas de rétractation exercée après le commencement de
                  l&apos;exécution de la prestation, il restera redevable des sommes
                  correspondant aux prestations effectivement réalisées jusqu&apos;à
                  la date de communication de sa décision de se rétracter ;
                </li>
                <li>
                  que lorsque la prestation a été entièrement exécutée avant la fin du
                  délai de rétractation, son droit de rétractation est perdu
                  conformément aux dispositions légales applicables.
                </li>
              </ul>
              <p className="mt-3">
                En cas d&apos;exercice valable du droit de rétractation, SARL KONIG
                remboursera les sommes versées dans un délai maximal de quatorze (14)
                jours à compter de la réception de la demande de rétractation, sous
                réserve des sommes éventuellement dues au titre des prestations déjà
                exécutées.
              </p>
              <p className="mt-3">
                Le droit de rétractation ne s&apos;applique pas aux Clients agissant
                dans le cadre de leur activité professionnelle lorsque la
                réglementation exclut ou limite ce droit.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                4. Accès à la formation
              </h2>
              <p className="mt-3">
                L&apos;accès à la formation est accordé au Client ou au Stagiaire après
                validation définitive de son inscription et sous réserve du règlement
                intégral des sommes dues ou de l&apos;acceptation d&apos;une prise en
                charge par un organisme financeur.
              </p>
              <p className="mt-3">
                Pour les formations dispensées à distance, SARL KONIG transmet au
                Stagiaire, avant le début de la formation, les informations
                nécessaires à sa connexion ainsi que les éventuels identifiants
                d&apos;accès aux outils et plateformes utilisés.
              </p>
              <p className="mt-3">
                Le Client et le Stagiaire sont seuls responsables de la compatibilité
                de leurs équipements informatiques, de leur connexion internet, de
                leurs logiciels, de leurs moyens de communication et de tout matériel
                nécessaire au suivi de la formation. Aucun remboursement, report ou
                indemnisation ne pourra être demandé en cas de défaillance des
                équipements ou de la connexion du Client ou du Stagiaire.
              </p>
              <p className="mt-3">
                Les identifiants de connexion éventuellement communiqués sont
                strictement personnels, confidentiels et non cessibles. Toute
                utilisation par un tiers non autorisé est interdite. Le Client demeure
                responsable de l&apos;utilisation faite de ses accès.
              </p>
              <p className="mt-3">
                Pour les formations en présentiel, le Stagiaire s&apos;engage à
                respecter les horaires, consignes de sécurité, règles de fonctionnement
                et règlement intérieur applicables sur le lieu de formation.
              </p>
              <p className="mt-3">
                Les retards, absences, interruptions volontaires ou abandons de
                formation imputables au Client ou au Stagiaire ne donnent lieu à aucun
                remboursement, report automatique ou indemnisation, sauf disposition
                légale impérative contraire.
              </p>
              <p className="mt-3">
                SARL KONIG s&apos;efforce d&apos;assurer la disponibilité des
                plateformes, outils numériques et moyens pédagogiques utilisés dans le
                cadre des formations. Toutefois, sa responsabilité ne saurait être
                engagée en cas d&apos;interruption temporaire du service, de
                maintenance, de panne, de dysfonctionnement technique, d&apos;attaque
                informatique, de saturation des réseaux de communication ou de tout
                événement indépendant de sa volonté.
              </p>
              <p className="mt-3">
                SARL KONIG se réserve le droit de suspendre, limiter ou retirer
                l&apos;accès à une formation sans indemnité ni remboursement en cas :
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                <li>de non-paiement des sommes dues ;</li>
                <li>de communication d&apos;informations inexactes lors de l&apos;inscription ;</li>
                <li>de non-respect des présentes CGV ;</li>
                <li>de comportement perturbant le bon déroulement de la formation ;</li>
                <li>
                  d&apos;utilisation frauduleuse ou non autorisée des supports,
                  plateformes ou outils mis à disposition.
                </li>
              </ul>
              <p className="mt-3">
                En cas de force majeure telle que définie par la législation et la
                jurisprudence françaises, ou en cas d&apos;événement exceptionnel
                indépendant de sa volonté rendant impossible l&apos;exécution normale
                de la formation, SARL KONIG pourra suspendre, reporter, adapter ou
                reprogrammer la prestation sans que sa responsabilité ne puisse être
                engagée.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                5. Propriété intellectuelle
              </h2>
              <p className="mt-3">
                L&apos;ensemble des contenus, supports, documents, méthodes
                pédagogiques, outils, exercices, études de cas, présentations, vidéos,
                enregistrements, ressources numériques, contenus diffusés sur les
                plateformes de formation ainsi que, plus généralement, tout élément
                remis ou mis à disposition dans le cadre des prestations de SARL
                KONIG, demeure la propriété exclusive de SARL KONIG ou de ses
                partenaires et intervenants titulaires des droits correspondants.
              </p>
              <p className="mt-3">
                Ces éléments sont protégés par les dispositions du Code de la
                propriété intellectuelle ainsi que par les conventions internationales
                relatives à la protection des droits d&apos;auteur et des droits
                voisins.
              </p>
              <p className="mt-3">
                L&apos;inscription à une formation n&apos;emporte aucun transfert de
                propriété intellectuelle au profit du Client ou du Stagiaire. Une
                licence d&apos;utilisation personnelle, non exclusive, non
                transférable et strictement limitée à la durée et à l&apos;objet de la
                formation est accordée au Stagiaire pour ses seuls besoins de
                formation.
              </p>
              <p className="mt-3">
                Sauf autorisation écrite préalable de SARL KONIG, il est strictement
                interdit au Client ou au Stagiaire de :
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                <li>
                  reproduire, copier, modifier, adapter ou traduire tout ou partie des
                  supports ou contenus pédagogiques ;
                </li>
                <li>
                  diffuser, publier, transmettre, partager ou mettre à disposition des
                  tiers les contenus de formation sous quelque forme que ce soit ;
                </li>
                <li>
                  commercialiser, revendre, louer ou exploiter les contenus ou supports
                  de formation ;
                </li>
                <li>
                  utiliser les contenus, méthodes ou outils pédagogiques en vue de
                  concevoir ou d&apos;animer des formations concurrentes ;
                </li>
                <li>
                  supprimer ou modifier les mentions relatives aux droits d&apos;auteur
                  ou à la propriété intellectuelle figurant sur les supports remis.
                </li>
              </ul>
              <p className="mt-3">
                Sauf accord écrit préalable de SARL KONIG, l&apos;enregistrement audio,
                vidéo ou photographique des formations, classes virtuelles,
                accompagnements, webinaires ou sessions de coaching est strictement
                interdit.
              </p>
              <p className="mt-3">
                Toute reproduction, représentation, diffusion ou exploitation non
                autorisée, totale ou partielle, des contenus ou supports de formation
                pourra donner lieu à des poursuites civiles et/ou pénales conformément
                aux dispositions légales en vigueur.
              </p>
              <p className="mt-3">
                Le Client est responsable du respect des présentes dispositions par ses
                salariés, collaborateurs, représentants et participants inscrits à une
                formation. Toute violation constatée pourra entraîner la suspension
                immédiate de l&apos;accès à la formation, sans remboursement ni
                indemnisation, sans préjudice des dommages et intérêts que SARL KONIG
                pourrait réclamer.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                6. Protection des données personnelles
              </h2>
              <p className="mt-3">
                Dans le cadre de ses activités, SARL KONIG est amenée à collecter et
                traiter des données à caractère personnel concernant les Clients, les
                Stagiaires et, le cas échéant, les représentants des entreprises
                clientes.
              </p>
              <p className="mt-3">Ces données sont collectées et traitées aux fins de :</p>
              <ul className="mt-3 flex flex-col gap-2">
                <li>la gestion des inscriptions et des commandes ;</li>
                <li>l&apos;exécution des prestations de formation ;</li>
                <li>le suivi pédagogique et administratif des Stagiaires ;</li>
                <li>la gestion de la facturation et des paiements ;</li>
                <li>
                  le respect des obligations légales et réglementaires applicables aux
                  organismes de formation ;
                </li>
                <li>la gestion de la relation client ;</li>
                <li>l&apos;amélioration des prestations proposées ;</li>
                <li>
                  l&apos;envoi d&apos;informations relatives aux activités, formations
                  et services de SARL KONIG, sous réserve des dispositions légales
                  applicables.
                </li>
              </ul>
              <p className="mt-3">
                Les données collectées sont strictement limitées à celles nécessaires
                à la réalisation des finalités précitées.
              </p>
              <p className="mt-3">
                SARL KONIG s&apos;engage à traiter les données personnelles
                conformément aux dispositions du Règlement (UE) 2016/679 du 27 avril
                2016 (RGPD) et à toute réglementation française applicable en matière
                de protection des données personnelles.
              </p>
              <p className="mt-3">
                Les données personnelles peuvent être communiquées aux partenaires,
                sous-traitants, intervenants, organismes financeurs, autorités
                administratives ou organismes de contrôle lorsque cette communication
                est nécessaire à l&apos;exécution de la prestation, au respect
                d&apos;une obligation légale ou à la défense des intérêts légitimes de
                SARL KONIG.
              </p>
              <p className="mt-3">
                SARL KONIG met en œuvre des mesures techniques et organisationnelles
                raisonnables destinées à assurer la sécurité, la confidentialité et
                l&apos;intégrité des données personnelles. Toutefois, compte tenu des
                risques inhérents à l&apos;utilisation des réseaux de communication
                électroniques et des systèmes informatiques, SARL KONIG ne peut
                garantir une sécurité absolue.
              </p>
              <p className="mt-3">
                Les données personnelles sont conservées pendant la durée nécessaire à
                la réalisation des finalités pour lesquelles elles ont été collectées,
                augmentée des durées de conservation ou de prescription imposées par
                la réglementation applicable.
              </p>
              <p className="mt-3">
                Toute personne concernée dispose, dans les conditions prévues par la
                réglementation en vigueur, des droits suivants : droit d&apos;accès,
                droit de rectification, droit à l&apos;effacement, droit à la
                limitation du traitement, droit d&apos;opposition, droit à la
                portabilité des données, et droit de définir des directives relatives
                au sort de ses données après son décès lorsque la réglementation
                applicable le prévoit.
              </p>
              <p className="mt-3">
                Ces droits peuvent être exercés à tout moment en adressant une demande
                accompagnée d&apos;un justificatif d&apos;identité à l&apos;adresse
                suivante :{" "}
                <a href="mailto:konig.formation@gmail.com" className="underline underline-offset-2">
                  konig.formation@gmail.com
                </a>
                . En cas de réclamation relative au traitement de ses données
                personnelles, toute personne concernée dispose du droit
                d&apos;introduire une plainte auprès de la Commission nationale de
                l&apos;informatique et des libertés.
              </p>
              <p className="mt-3">
                Le Client s&apos;engage à informer les Stagiaires qu&apos;il inscrit à
                une formation de l&apos;existence du présent traitement de données
                personnelles et garantit à SARL KONIG qu&apos;il dispose de toute
                autorisation nécessaire pour communiquer les données personnelles des
                participants inscrits.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                7. Responsabilités des parties
              </h2>
              <p className="mt-3">
                SARL KONIG est tenue à une obligation de moyens dans l&apos;exécution
                de ses prestations. Elle s&apos;engage à mettre en œuvre l&apos;ensemble
                des moyens humains, techniques, pédagogiques et organisationnels
                raisonnablement nécessaires à la bonne réalisation des formations
                proposées.
              </p>
              <p className="mt-3">
                SARL KONIG ne garantit en aucun cas l&apos;obtention d&apos;un diplôme,
                d&apos;une certification, d&apos;une habilitation, d&apos;un emploi,
                d&apos;une promotion professionnelle, d&apos;un marché, d&apos;un
                chiffre d&apos;affaires, d&apos;un résultat commercial ou de tout autre
                résultat attendu par le Client ou le Stagiaire.
              </p>
              <p className="mt-3">
                Le Client et le Stagiaire demeurent seuls responsables de
                l&apos;utilisation des connaissances, compétences, outils, méthodes,
                documents et informations transmis dans le cadre des formations. SARL
                KONIG ne pourra être tenue responsable des décisions, actions,
                omissions ou conséquences résultant directement ou indirectement de
                l&apos;utilisation des enseignements, conseils ou recommandations
                dispensés dans le cadre de ses prestations.
              </p>
              <p className="mt-3">
                Le Client s&apos;engage à fournir des informations exactes, complètes
                et à jour lors de son inscription ainsi qu&apos;à signaler sans délai
                toute modification susceptible d&apos;avoir une incidence sur
                l&apos;exécution de la prestation. Le Client et le Stagiaire
                s&apos;engagent à respecter les présentes CGV, les consignes
                communiquées par SARL KONIG, les règles de sécurité applicables ainsi
                que le règlement intérieur lorsqu&apos;il existe.
              </p>
              <p className="mt-3">
                SARL KONIG ne pourra être tenue responsable des dommages indirects
                subis par le Client ou le Stagiaire, notamment toute perte de chiffre
                d&apos;affaires, perte d&apos;exploitation, perte de clientèle, perte
                de données, perte de revenus, perte de chance, atteinte à l&apos;image
                ou tout autre préjudice commercial ou financier indirect.
              </p>
              <p className="mt-3">
                Dans tous les cas où sa responsabilité serait retenue, pour quelque
                cause que ce soit et dans les limites autorisées par la loi, la
                responsabilité totale de SARL KONIG sera limitée au montant
                effectivement payé par le Client au titre de la prestation concernée.
              </p>
              <p className="mt-3">
                SARL KONIG ne pourra être tenue responsable de l&apos;inexécution ou du
                retard dans l&apos;exécution de ses obligations résultant d&apos;un cas
                de force majeure au sens de l&apos;article 1218 du Code civil et de la
                jurisprudence française, ou de tout événement échappant raisonnablement
                à son contrôle, notamment : panne ou interruption des réseaux de
                télécommunication ou d&apos;internet, défaillance d&apos;un prestataire
                externe, cyberattaque ou incident informatique, grève, catastrophe
                naturelle, épidémie ou pandémie, décision administrative ou
                gouvernementale, ou indisponibilité imprévisible d&apos;un formateur
                pour des raisons de santé ou de sécurité.
              </p>
              <p className="mt-3">
                Le Client est seul responsable de la conservation et de la
                confidentialité de ses identifiants de connexion, de ses équipements
                informatiques et de la sécurité de ses systèmes d&apos;information.
              </p>
              <p className="mt-3">
                Toute réclamation relative à une prestation devra être adressée par
                écrit à SARL KONIG dans un délai maximal de trente (30) jours à
                compter de la fin de la formation. À défaut, la prestation sera
                réputée acceptée sans réserve.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                8. Médiation des litiges
              </h2>
              <p className="mt-3">
                En cas de contestation, réclamation ou différend relatif à
                l&apos;interprétation, la validité, l&apos;exécution ou la cessation
                des prestations fournies par SARL KONIG, les parties s&apos;engagent à
                rechercher en priorité une solution amiable.
              </p>
              <p className="mt-3">
                Toute réclamation devra être adressée préalablement par écrit à SARL
                KONIG à l&apos;adresse suivante :{" "}
                <a href="mailto:konig.formation@gmail.com" className="underline underline-offset-2">
                  konig.formation@gmail.com
                </a>
                . SARL KONIG s&apos;efforcera d&apos;apporter une réponse dans un délai
                raisonnable à compter de la réception de la réclamation.
              </p>
              <p className="mt-3">
                Lorsque le Client a la qualité de consommateur au sens du Code de la
                consommation et qu&apos;aucune solution amiable n&apos;a pu être
                trouvée, il peut recourir gratuitement à un dispositif de médiation de
                la consommation conformément aux articles L.612-1 et suivants du Code
                de la consommation. À cet effet, SARL KONIG adhère au dispositif de
                médiation suivant :
              </p>
              <ul className="mt-3 flex flex-col gap-1">
                <li className="font-medium text-foreground">CNPM Médiation Consommation</li>
                <li>27 avenue de la Libération, 42400 Saint-Chamond</li>
                <li>
                  Site internet :{" "}
                  <a
                    href="https://www.cnpm-mediation-consommation.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    www.cnpm-mediation-consommation.eu
                  </a>
                </li>
              </ul>
              <p className="mt-3">
                Le recours à la médiation est facultatif. Le Client conserve à tout
                moment la possibilité de saisir les juridictions compétentes
                conformément aux dispositions légales applicables. La demande de
                médiation ne peut intervenir qu&apos;après une tentative préalable de
                résolution amiable directement auprès de SARL KONIG.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                9. Loi applicable et juridiction compétente
              </h2>
              <p className="mt-3">
                Les présentes Conditions Générales de Vente ainsi que l&apos;ensemble
                des relations contractuelles entre SARL KONIG et le Client sont régies
                par le droit français.
              </p>
              <p className="mt-3">
                En cas de différend relatif à la validité, l&apos;interprétation,
                l&apos;exécution ou la cessation des prestations fournies par SARL
                KONIG, les parties s&apos;efforceront de rechercher préalablement une
                solution amiable dans les conditions prévues à l&apos;article
                « Médiation des litiges ».
              </p>
              <p className="mt-3">À défaut de résolution amiable :</p>
              <ul className="mt-3 flex flex-col gap-2">
                <li>
                  lorsque le Client agit en qualité de professionnel, compétence
                  expresse est attribuée aux tribunaux matériellement compétents du
                  ressort de la Cour d&apos;appel de Paris, y compris en cas de
                  pluralité de défendeurs, d&apos;appel en garantie ou de procédure
                  d&apos;urgence ;
                </li>
                <li>
                  lorsque le Client agit en qualité de consommateur, les règles de
                  compétence prévues par les dispositions légales du Code de la
                  consommation et du Code de procédure civile s&apos;appliquent.
                </li>
              </ul>
              <p className="mt-3">
                Le fait pour SARL KONIG de ne pas se prévaloir à un moment donné de
                l&apos;une quelconque des dispositions des présentes CGV ne saurait
                être interprété comme une renonciation à s&apos;en prévaloir
                ultérieurement.
              </p>
              <p className="mt-3">
                Si une disposition des présentes CGV venait à être déclarée nulle,
                illégale ou inapplicable par une décision de justice devenue
                définitive, les autres dispositions demeureront pleinement
                applicables.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                10. Conditions de report et d&apos;annulation d&apos;une séance de
                formation
              </h2>
              <p className="mt-3">
                SARL KONIG se réserve le droit de reporter, modifier, reprogrammer ou
                annuler une session de formation lorsque les circonstances
                l&apos;exigent, notamment en cas de force majeure, d&apos;indisponibilité
                d&apos;un intervenant, de contraintes techniques, de raisons de
                sécurité, de circonstances exceptionnelles ou lorsque le nombre de
                participants inscrits est jugé insuffisant pour assurer le bon
                déroulement pédagogique de la formation.
              </p>
              <p className="mt-3">
                Dans cette hypothèse, SARL KONIG informera le Client dans les meilleurs
                délais. Les sommes déjà versées pourront, au choix du Client, être
                reportées sur une session ultérieure ou remboursées. Cette situation ne
                pourra donner lieu au versement d&apos;aucune indemnité, dommages et
                intérêts ou remboursement de frais annexes engagés par le Client,
                notamment les frais de déplacement, d&apos;hébergement, de
                restauration, de perte d&apos;exploitation ou tout autre frais
                indirect.
              </p>
              <p className="mt-3">
                L&apos;annulation d&apos;une inscription par le Client doit être
                notifiée par écrit à l&apos;adresse suivante :{" "}
                <a href="mailto:konig.formation@gmail.com" className="underline underline-offset-2">
                  konig.formation@gmail.com
                </a>
                .
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                <li>
                  Toute annulation intervenant plus de dix (10) jours calendaires avant
                  le début de la formation donnera lieu à un remboursement intégral des
                  sommes versées ou à un report de l&apos;inscription à une session
                  ultérieure, selon le choix du Client.
                </li>
                <li>
                  Toute annulation intervenant entre quatre (4) et dix (10) jours
                  ouvrables avant le début de la formation donnera lieu à la
                  facturation d&apos;une indemnité égale à 10 % du coût total de la
                  formation.
                </li>
                <li>
                  Toute annulation intervenant moins de trois (3) jours ouvrables avant
                  le début de la formation, toute absence non justifiée ou tout
                  abandon en cours de formation pour un motif autre qu&apos;un cas de
                  force majeure dûment justifié entraînera l&apos;exigibilité de 100 %
                  du coût de la formation.
                </li>
              </ul>
              <p className="mt-3">
                Toute demande de report formulée par le Client devra être adressée par
                écrit au moins quatorze (14) jours calendaires avant la date prévue de
                la formation. SARL KONIG demeure libre d&apos;accepter ou de refuser
                cette demande en fonction des contraintes d&apos;organisation et des
                places disponibles.
              </p>
              <p className="mt-3">
                En cas de cessation anticipée de la formation du fait de SARL KONIG,
                seules les prestations effectivement réalisées seront facturées au
                prorata de leur exécution, sauf lorsque cette cessation résulte
                d&apos;un cas de force majeure. Si le Stagiaire est empêché de suivre
                la formation en raison d&apos;un cas de force majeure dûment justifié,
                seules les prestations effectivement dispensées seront dues au prorata
                temporis de leur valeur.
              </p>
              <p className="mt-3">
                Aucun remboursement ne pourra être accordé en cas d&apos;absence
                ponctuelle, de retard, de départ anticipé ou de participation partielle
                à une formation imputable au Client ou au Stagiaire.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                11. Accessibilité aux personnes en situation de handicap
              </h2>
              <p className="mt-3">
                SARL KONIG s&apos;engage à favoriser l&apos;accès de ses formations aux
                personnes en situation de handicap, dans le respect de ses capacités
                d&apos;accueil, de ses moyens techniques, pédagogiques et
                organisationnels.
              </p>
              <p className="mt-3">
                Toute personne en situation de handicap ou nécessitant des
                aménagements spécifiques est invitée à en informer SARL KONIG avant
                son inscription ou dans les meilleurs délais afin d&apos;étudier les
                solutions d&apos;adaptation envisageables. Selon la nature du handicap
                et les contraintes de la formation concernée, SARL KONIG pourra
                mettre en œuvre, dans la mesure du raisonnable et de ses possibilités,
                les adaptations nécessaires au bon déroulement du parcours de
                formation.
              </p>
              <p className="mt-3">
                Lorsque les adaptations nécessaires ne peuvent être mises en œuvre par
                SARL KONIG dans des conditions satisfaisantes, le référent handicap
                pourra orienter le Client ou le Stagiaire vers des organismes,
                structures ou partenaires spécialisés susceptibles de proposer une
                solution adaptée.
              </p>
              <p className="mt-3">Le référent handicap de SARL KONIG a notamment pour mission :</p>
              <ul className="mt-3 flex flex-col gap-2">
                <li>d&apos;accueillir et d&apos;informer les personnes en situation de handicap ;</li>
                <li>d&apos;évaluer les besoins d&apos;adaptation du parcours de formation ;</li>
                <li>de faciliter l&apos;accès aux dispositifs d&apos;accompagnement existants ;</li>
                <li>d&apos;orienter, lorsque cela est nécessaire, vers les interlocuteurs compétents ;</li>
                <li>
                  de contribuer à la sécurisation du parcours de formation des
                  apprenants concernés.
                </li>
              </ul>
              <p className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
                <strong className="text-foreground">Référent handicap</strong>
                <br />
                Nom : Alexis Romito
                <br />
                Téléphone : 06 18 70 07 47
                <br />
                Adresse électronique :{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                  {siteConfig.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                12. Contact
              </h2>
              <p className="mt-3">
                Pour toute question relative aux formations, à l&apos;exécution
                d&apos;une prestation, à une inscription, à une facturation, à une
                réclamation ou à l&apos;application des présentes Conditions Générales
                de Vente, le Client ou le Stagiaire peut contacter SARL KONIG aux
                coordonnées suivantes :
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                <li>
                  Adresse électronique :{" "}
                  <a href="mailto:konig.formation@gmail.com" className="underline underline-offset-2">
                    konig.formation@gmail.com
                  </a>
                </li>
                <li>Téléphone : 06 66 08 65 71</li>
              </ul>
              <p className="mt-3">
                SARL KONIG s&apos;efforcera de répondre aux demandes dans les
                meilleurs délais. Pour des raisons de traçabilité et de sécurité
                juridique, toute demande relative à une annulation, un report, une
                réclamation, l&apos;exercice d&apos;un droit de rétractation ou toute
                contestation devra être formulée par écrit à l&apos;adresse
                électronique indiquée ci-dessus.
              </p>
              <p className="mt-3">
                Les échanges effectués par courrier électronique entre SARL KONIG et le
                Client pourront être utilisés comme élément de preuve dans le cadre de
                leurs relations contractuelles, conformément à la réglementation en
                vigueur.
              </p>
              <p className="mt-3">
                Les présentes Conditions Générales de Vente sont applicables pendant
                toute la durée des relations contractuelles entre SARL KONIG et le
                Client et demeurent accessibles sur simple demande.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                13. Utilisation de l&apos;image, de la voix et des témoignages
              </h2>
              <p className="mt-3">
                Dans le cadre des formations, des classes virtuelles, des ateliers, des
                événements ou des actions de communication organisés par SARL KONIG,
                des photographies, captures d&apos;écran, enregistrements audio ou
                vidéo peuvent être réalisés.
              </p>
              <p className="mt-3">
                Aucune utilisation individualisée de l&apos;image ou de la voix
                d&apos;un participant à des fins de communication externe ne sera
                effectuée sans son accord préalable lorsque celui-ci est requis par la
                réglementation applicable.
              </p>
              <p className="mt-3">
                Le Client et le Stagiaire autorisent SARL KONIG à utiliser, reproduire
                et diffuser les avis, évaluations, retours d&apos;expérience et
                témoignages qu&apos;ils communiquent volontairement, sous une forme
                anonymisée ou non selon l&apos;autorisation donnée, à des fins
                d&apos;amélioration de ses services, de promotion de ses formations et
                de communication commerciale. Toute demande de retrait ou de
                modification d&apos;un témoignage pourra être adressée à SARL KONIG
                par écrit.
              </p>
              <p className="mt-3">
                Les enregistrements réalisés à des fins pédagogiques, administratives,
                de contrôle qualité, de conformité réglementaire ou de sécurité
                pourront être conservés pendant la durée nécessaire à ces finalités,
                conformément à la réglementation applicable.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                14. Sous-traitance et intervenants extérieurs
              </h2>
              <p className="mt-3">
                SARL KONIG se réserve le droit de faire appel à tout salarié,
                consultant, formateur indépendant, prestataire ou sous-traitant de son
                choix pour assurer tout ou partie des prestations de formation,
                d&apos;accompagnement, de conseil ou de coaching proposées à ses
                Clients. Le recours à un intervenant extérieur ou à un sous-traitant ne
                constitue pas une modification substantielle du contrat et ne peut
                donner lieu à aucune annulation, résiliation, réduction de prix ou
                demande d&apos;indemnisation de la part du Client.
              </p>
              <p className="mt-3">
                SARL KONIG demeure responsable de la bonne exécution des prestations
                réalisées pour son compte par ses sous-traitants ou intervenants
                extérieurs, dans les limites prévues aux présentes Conditions
                Générales de Vente. SARL KONIG se réserve également le droit de
                remplacer un formateur initialement prévu par un autre intervenant
                présentant des compétences, qualifications ou expériences
                équivalentes, lorsque les circonstances l&apos;exigent.
              </p>
              <p className="mt-3">
                Le Client reconnaît que son engagement porte sur la prestation de
                formation et ses objectifs pédagogiques, et non sur l&apos;intervention
                d&apos;une personne déterminée, sauf stipulation contraire
                expressément acceptée par écrit par SARL KONIG. Les sous-traitants et
                intervenants extérieurs sont soumis aux mêmes obligations de
                confidentialité, de protection des données personnelles et de respect
                des engagements contractuels que SARL KONIG dans le cadre de
                l&apos;exécution des prestations.
              </p>
              <p className="mt-3">
                Le Client s&apos;interdit, pendant toute la durée de la prestation et
                pendant une période de douze (12) mois suivant son terme, de
                solliciter directement en vue d&apos;une collaboration
                professionnelle, d&apos;un recrutement ou d&apos;une prestation de
                services tout formateur, consultant, salarié ou sous-traitant ayant
                participé à l&apos;exécution de la prestation, sans l&apos;accord
                écrit préalable de SARL KONIG.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                15. Signature électronique et preuve
              </h2>
              <p className="mt-3">
                Le Client reconnaît et accepte que la validation d&apos;un devis,
                d&apos;une convention de formation, d&apos;un contrat de formation,
                d&apos;un bon de commande ou de tout autre document contractuel par
                voie électronique emporte les mêmes effets juridiques qu&apos;une
                signature manuscrite et manifeste son consentement plein et entier aux
                engagements souscrits.
              </p>
              <p className="mt-3">
                Les parties reconnaissent comme recevables et opposables les documents
                échangés sous format électronique, notamment les devis, conventions,
                contrats, factures, attestations, feuilles d&apos;émargement
                électroniques, courriers électroniques, confirmations
                d&apos;inscription, échanges via les plateformes numériques ainsi que
                tout document dématérialisé utilisé dans le cadre de la relation
                contractuelle.
              </p>
              <p className="mt-3">
                Les registres informatisés, données de connexion, journaux
                d&apos;activité, accusés de réception électroniques, systèmes
                d&apos;horodatage, plateformes de signature électronique et plus
                généralement tout enregistrement informatique conservé dans des
                conditions raisonnables de sécurité seront considérés comme des
                éléments de preuve recevables entre les parties.
              </p>
              <p className="mt-3">
                Sauf preuve contraire, les données enregistrées par les systèmes
                d&apos;information de SARL KONIG constituent la preuve de
                l&apos;ensemble des transactions, commandes, paiements, inscriptions,
                connexions et échanges intervenus avec le Client ou le Stagiaire.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                16. Évolution des Conditions Générales de Vente
              </h2>
              <p className="mt-3">
                SARL KONIG se réserve le droit de modifier à tout moment les présentes
                Conditions Générales de Vente afin de tenir compte notamment des
                évolutions législatives, réglementaires, jurisprudentielles,
                techniques, organisationnelles ou commerciales affectant son activité.
              </p>
              <p className="mt-3">
                Les Conditions Générales de Vente applicables sont celles en vigueur à
                la date de la commande, de l&apos;inscription ou de la signature du
                document contractuel concerné. Toute nouvelle version des Conditions
                Générales de Vente sera applicable aux commandes et prestations
                conclues postérieurement à sa date d&apos;entrée en vigueur.
              </p>
              <p className="mt-3">
                Le fait pour SARL KONIG de ne pas se prévaloir à un moment donné de
                l&apos;une quelconque des dispositions des présentes Conditions
                Générales de Vente ne saurait être interprété comme une renonciation à
                s&apos;en prévaloir ultérieurement. Si l&apos;une quelconque des
                dispositions des présentes Conditions Générales de Vente était
                déclarée nulle, inapplicable ou illégale par une décision de justice
                devenue définitive, les autres dispositions demeureraient pleinement
                applicables et conserveraient tous leurs effets.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                17. Confidentialité
              </h2>
              <p className="mt-3">
                Dans le cadre de l&apos;exécution des prestations de formation,
                chacune des parties peut être amenée à avoir accès à des informations,
                documents, données, méthodes, procédés, stratégies, savoir-faire ou
                éléments présentant un caractère confidentiel.
              </p>
              <p className="mt-3">
                Le Client, le Stagiaire et, le cas échéant, les représentants de
                l&apos;entreprise cliente s&apos;engagent à conserver strictement
                confidentielles les informations dont ils pourraient avoir connaissance
                dans le cadre de la formation et à ne pas les divulguer à des tiers
                sans l&apos;accord préalable et écrit de la partie concernée. De son
                côté, SARL KONIG s&apos;engage à préserver la confidentialité des
                informations communiquées par le Client ou les participants dans le
                cadre de l&apos;exécution des prestations, sous réserve des
                obligations légales, réglementaires ou administratives qui pourraient
                lui être imposées.
              </p>
              <p className="mt-3">Cette obligation de confidentialité ne s&apos;applique pas aux informations :</p>
              <ul className="mt-3 flex flex-col gap-2">
                <li>déjà connues du public au moment de leur communication ;</li>
                <li>devenues publiques sans faute de la partie qui les reçoit ;</li>
                <li>
                  obtenues légalement auprès d&apos;un tiers non tenu à une obligation
                  de confidentialité ;
                </li>
                <li>
                  dont la divulgation est imposée par la loi, une autorité
                  administrative ou une décision de justice.
                </li>
              </ul>
              <p className="mt-3">
                Les obligations prévues au présent article demeurent applicables
                pendant toute la durée de la relation contractuelle ainsi que pendant
                une durée de cinq (5) ans suivant son expiration ou sa cessation,
                quelle qu&apos;en soit la cause.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                18. Lutte contre la fraude et usurpation d&apos;identité
              </h2>
              <p className="mt-3">
                SARL KONIG se réserve le droit de mettre en œuvre toute mesure
                raisonnable destinée à vérifier l&apos;identité des participants
                inscrits à une formation, notamment dans le cadre de formations à
                distance, de dispositifs financés par un organisme tiers ou de
                formations faisant l&apos;objet d&apos;exigences réglementaires
                particulières.
              </p>
              <p className="mt-3">
                Le Client et le Stagiaire s&apos;engagent à fournir des informations
                exactes, complètes et sincères lors de leur inscription et tout au
                long de la relation contractuelle. Toute fausse déclaration,
                usurpation d&apos;identité, fraude, tentative de fraude, utilisation de
                documents falsifiés ou communication d&apos;informations inexactes
                pourra entraîner, sans préavis :
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                <li>le refus d&apos;accès à la formation ;</li>
                <li>la suspension ou l&apos;exclusion du participant concerné ;</li>
                <li>l&apos;annulation de l&apos;inscription ;</li>
                <li>la suppression des accès aux plateformes pédagogiques ;</li>
                <li>
                  la non-délivrance des attestations, certificats ou documents de fin
                  de formation.
                </li>
              </ul>
              <p className="mt-3">
                Dans ces hypothèses, les sommes versées resteront acquises à SARL
                KONIG à titre d&apos;indemnisation, sans préjudice de toute action
                judiciaire ou demande de dommages et intérêts que SARL KONIG pourrait
                engager. SARL KONIG se réserve également le droit de signaler tout
                comportement frauduleux aux organismes financeurs, autorités
                compétentes ou organismes de contrôle concernés lorsque la
                réglementation l&apos;impose ou le permet.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                19. Évaluations, attestations et certifications
              </h2>
              <p className="mt-3">
                Selon la nature de la formation suivie, SARL KONIG peut mettre en
                place des évaluations, tests de positionnement, mises en situation,
                contrôles de connaissances ou toute autre modalité d&apos;évaluation
                pédagogique qu&apos;elle juge appropriée. La participation aux
                évaluations prévues dans le parcours de formation peut constituer une
                condition nécessaire à la délivrance de certains documents de fin de
                formation.
              </p>
              <p className="mt-3">
                Les attestations de présence, certificats de réalisation, attestations
                de compétences ou tout autre document équivalent ne sont délivrés
                qu&apos;aux participants ayant satisfait aux conditions
                administratives et pédagogiques prévues pour la formation concernée.
                En cas d&apos;absence, d&apos;abandon anticipé, d&apos;exclusion, de
                non-participation aux évaluations obligatoires ou de non-respect des
                conditions prévues, SARL KONIG pourra refuser la délivrance des
                documents concernés.
              </p>
              <p className="mt-3">
                Lorsque la formation prépare à une certification, un examen, une
                habilitation ou tout autre dispositif d&apos;évaluation externe, SARL
                KONIG ne garantit en aucun cas la réussite du participant ni
                l&apos;obtention de la certification ou du diplôme visé. Les résultats
                obtenus lors des évaluations demeurent strictement personnels et sont
                communiqués au participant concerné ainsi qu&apos;aux organismes
                habilités lorsque la réglementation ou les conditions de financement
                l&apos;exigent.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                20. Cas de force majeure
              </h2>
              <p className="mt-3">
                SARL KONIG ne pourra être tenue responsable de tout retard,
                suspension, interruption, report, annulation ou inexécution totale ou
                partielle de ses obligations lorsque cette situation résulte d&apos;un
                cas de force majeure au sens de l&apos;article 1218 du Code civil ou de
                tout événement échappant raisonnablement à son contrôle.
              </p>
              <p className="mt-3">
                Sont notamment considérés comme des événements de force majeure ou
                assimilés, sans que cette liste soit limitative : catastrophe
                naturelle, incendie, inondation, épidémie, pandémie, grève, conflit
                social, décision administrative ou gouvernementale, restriction de
                déplacement, fermeture de locaux, panne générale des réseaux de
                télécommunication ou d&apos;internet, cyberattaque, incident
                informatique majeur, défaillance d&apos;un prestataire essentiel,
                indisponibilité imprévisible d&apos;un formateur pour raison de santé
                ou de sécurité, ou tout autre événement empêchant l&apos;exécution
                normale de la prestation.
              </p>
              <p className="mt-3">
                En cas de survenance d&apos;un tel événement, SARL KONIG informera le
                Client dans les meilleurs délais et pourra, selon les circonstances,
                suspendre, adapter, reporter, reprogrammer ou annuler la formation
                concernée, sans que sa responsabilité ne puisse être engagée.
              </p>
              <p className="mt-3">
                Lorsque la formation peut être reportée ou reprogrammée dans des
                conditions raisonnables, les sommes déjà versées seront affectées à la
                nouvelle session proposée. Lorsque le report est impossible ou
                manifestement inadapté, seules les prestations effectivement
                réalisées resteront dues. Les sommes correspondant aux prestations non
                réalisées pourront être remboursées, sous réserve des frais déjà
                engagés et non récupérables par SARL KONIG.
              </p>
              <p className="mt-3">
                Aucune indemnité, pénalité, dommages et intérêts ou remboursement de
                frais indirects ne pourra être réclamé à SARL KONIG au titre d&apos;un
                événement de force majeure, notamment au titre de pertes
                d&apos;exploitation, frais de déplacement, frais d&apos;hébergement,
                perte de chance ou préjudice commercial.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                21. Évaluations, attestations et certifications (CPF)
              </h2>
              <p className="mt-3">
                Dans le cadre des formations financées, totalement ou partiellement,
                par le Compte Personnel de Formation (CPF), le participant est informé
                que la présentation à l&apos;épreuve de certification,
                d&apos;évaluation ou d&apos;examen associée à la formation constitue
                une obligation. Le participant s&apos;engage à se présenter aux
                épreuves prévues selon les modalités définies par SARL KONIG ou par
                l&apos;organisme certificateur concerné.
              </p>
              <p className="mt-3">
                En cas d&apos;absence injustifiée, de refus de participation,
                d&apos;abandon, de fraude, de tentative de fraude ou de non-respect
                des conditions requises pour la présentation à la certification, SARL
                KONIG se réserve le droit d&apos;en informer les organismes concernés,
                notamment les organismes financeurs, certificateurs ou de contrôle.
              </p>
              <p className="mt-3">
                Les attestations de présence, certificats de réalisation, attestations
                de compétences ou tout autre document équivalent ne sont délivrés
                qu&apos;aux participants ayant satisfait aux conditions
                administratives, financières et pédagogiques prévues pour la
                formation concernée et, le cas échéant, ayant participé aux
                évaluations ou certifications obligatoires associées au parcours. En
                cas d&apos;absence, d&apos;abandon anticipé, d&apos;exclusion, de
                non-participation aux évaluations obligatoires ou de non-respect des
                conditions prévues, SARL KONIG pourra refuser la délivrance des
                documents concernés.
              </p>
              <p className="mt-3">
                Lorsque la formation prépare à une certification, un examen, une
                habilitation ou tout autre dispositif d&apos;évaluation interne ou
                externe, SARL KONIG ne garantit en aucun cas la réussite du
                participant ni l&apos;obtention de la certification, du diplôme, de
                l&apos;habilitation ou du niveau de résultat visé. Les résultats
                obtenus lors des évaluations demeurent strictement personnels et sont
                communiqués au participant concerné ainsi qu&apos;aux organismes
                habilités lorsque la réglementation, les conditions de financement ou
                les exigences de l&apos;organisme certificateur l&apos;imposent.
              </p>
            </section>

            <p className="rounded-lg border border-border bg-muted/30 p-4 text-xs">
              SARL KONIG — Capital social 1 000 € — SIRET 908 180 284 00014 — NDA
              11922488192 — Adresse : 125 boulevard du Général Koenig, 92200
              Neuilly-sur-Seine.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
