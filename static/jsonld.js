const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(

    {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://www.wikidata.org/entity/Q132189472",
        "name": "Osama Ata",
        "url": "https://osamata.com/cv/",
        "sameAs": [
            "https://www.wikidata.org/wiki/Q132189472",
            "https://linkedin.com/in/osamata",
            "https://github.com/osama-ata"
        ],
        "jobTitle": "Contracts Manager",
        "worksFor": {
            "@type": "Organization",
            "name": "Construction Company"
        },
        "alumniOf": [
            {
                "@type": "EducationalOrganization",
                "@id": "https://www.wikidata.org/wiki/Q4116236",
                "name": "Mansoura University",
                "url": "https://www.mans.edu.eg"
            },
            {
                "@type": "EducationalOrganization",
                "@id": "https://www.wikidata.org/wiki/Q194445",
                "name": "Cairo University",
                "url": "https://cu.edu.eg/ar/Home"
            },
            {
                "@type": "EducationalOrganization",
                "@id": "https://www.wikidata.org/wiki/Q469476",
                "name": "The American University in Cairo",
                "url": "https://www.aucegypt.edu"
            }
        ],
        "knowsAbout": ["Construction Contracts",
            "Procurement",
            "Claims Management",
            "Construction Law",
            "FIDIC"],
        "hasOccupation": [
            {
                "@type": "Occupation",
                "name": "Contracts Manager"
            }
        ],
        "memberOf": [
            {
                "@type": "Organization",
                "@id": "https://www.wikidata.org/wiki/Q5086802",
                "name": "Chartered Institute of Arbitrators",
                "url": "http://www.ciarb.org/"
            },
            {
                "@type": "Organization",
                "@id": "https://www.wikidata.org/wiki/Q7427129",
                "name": "Saudi Council of Engineers",
                "url": "http://www.saudieng.sa"
            },
            {
                "@type": "Organization",
                "@id": "https://www.wikidata.org/wiki/Q60572562",
                "name": "Egyptian Engineers Syndicate",
                "url": "http://eea.org.eg/"
            }
        ]
    }


);
document.head.appendChild(script);