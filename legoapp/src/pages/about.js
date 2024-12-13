import React from 'react';

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800">
      {/* Titel */}
      <h1 className="text-4xl font-bold text-center mb-8">Über LEGO</h1>
      
      {/* Einleitender Text */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Willkommen in der Welt von LEGO</h2>
        <p>
          LEGO ist nicht nur ein Spielzeug – es ist ein Universum voller Kreativität, Fantasie und endloser Möglichkeiten. Seit Jahrzehnten bringt LEGO Menschen jeden Alters zusammen, um in lebendigen Farben und komplexen Designs zu bauen, zu erkunden und zu träumen.
        </p>
      </section>
      
      {/* Mission und Werte */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Unsere Mission und Werte</h2>
        <p>
          Bei LEGO ist es unser Ziel, die Erbauer von morgen zu inspirieren. Unsere Mission ist es, durch Spiel Kreativität und Lernen zu fördern, da wir fest daran glauben, dass die Kraft der Vorstellung eine bessere Welt schaffen kann. Zu unseren Kernwerten zählen Qualität, Sicherheit, Kreativität und Gemeinschaft.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>Kreativität und Fantasie</li>
          <li>Qualität und Sicherheit</li>
          <li>Inklusivität und Gemeinschaft</li>
          <li>Umweltverantwortung</li>
        </ul>
      </section>
      
      {/* Geschichte */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Unsere Geschichte</h2>
        <p>
          LEGO wurde 1932 in Dänemark von Ole Kirk Christiansen, einem Tischler mit Leidenschaft für hochwertige Handwerkskunst, gegründet. Anfangs produzierte das Unternehmen Holzspielzeug, bis die legendären Kunststoffbausteine 1958 entwickelt wurden. Seitdem hat LEGO Generationen dazu inspiriert, ihre eigenen Abenteuer zu erschaffen.
        </p>
      </section>
      
      {/* Produkte und Innovation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Produkte und Innovation</h2>
        <p>
          Von klassischen LEGO-Sets bis hin zu detaillierten Modellen und Kooperationen mit beliebten Franchises – LEGO bietet für jeden etwas. Jedes Set ist darauf ausgelegt, den Geist herauszufordern, die motorischen Fähigkeiten zu fördern und den kreativen Funken in Menschen jeden Alters zu entfachen.
        </p>
        <p className="mt-4">
          Wir arbeiten stets an Innovationen, von interaktiven, digitalen Spielerlebnissen bis hin zu Nachhaltigkeitsinitiativen zur Reduzierung unseres ökologischen Fußabdrucks. Unser Ziel ist es, uns weiterzuentwickeln und durch jeden einzelnen Stein eine positive Wirkung zu erzielen.
        </p>
      </section>
      
      {/* Community-Abschnitt */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Teil der LEGO-Community werden</h2>
        <p>
          Die LEGO-Community spannt sich über die ganze Welt und verbindet Menschen, die eine Leidenschaft fürs Bauen teilen. Von Fan-Konventionen bis zu Online-Foren bringt LEGO Menschen zusammen, um Ideen auszutauschen, Modelle zu präsentieren und die Freude an der Kreativität zu feiern.
        </p>
      </section>
    </div>
  );
};

export default About;
