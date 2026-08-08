/*
  EDIT THIS FILE FIRST.
  1. Replace contact.whatsapp with your WhatsApp number in international format.
  2. Replace contact.instagram with your Instagram profile URL.
  3. Add/edit fabrics in the fabrics array.

  Fabric detail pages use:
    fabric.html?fabric=royal-silk

  You can add a new fabric by copying an object and changing its slug/content.
*/

const SITE_DATA = {
  brand: {
    name: "Alfowa Saqi",
    shortName: "Alfowa"
  },

  contact: {
    whatsapp: "https://wa.me/2349120412003",
    instagram: "https://instagram.com/magaji.ahmed"
  },

  fabrics: [
    {
      slug: "royal-silk",
      name: "Royal Silk",
      shortDescription: "A smooth, luminous fabric with an elegant drape for statement garments and premium pieces.",
      overview: "Royal Silk is designed for clients who want a refined surface, fluid movement and a polished finish. It can be produced around your preferred colour, weight and final application.",
      price: "From ₦18,000 / metre",
      heroClass: "texture-silk",
      featured: true,
      threads: [
        { name: "Silk filament", material: "100% silk", note: "Smooth, lustrous surface" },
        { name: "Fine support thread", material: "Silk / cotton blend", note: "Adds body and stability" }
      ],
      process: [
        ["01", "Specification", "We confirm the intended use, width, weight, colour and finish."],
        ["02", "Thread preparation", "Selected fibres are prepared, sized and arranged for production."],
        ["03", "Weaving", "The warp and weft are constructed to achieve the agreed density and texture."],
        ["04", "Finishing", "The cloth is treated, pressed and inspected for the desired hand and appearance."]
      ],
      gallery: [
        { label: "Finished drape", className: "texture-silk" },
        { label: "Surface detail", className: "texture-silk-alt" },
        { label: "Finished garment", className: "texture-purple" }
      ]
    },
    {
      slug: "heritage-brocade",
      name: "Heritage Brocade",
      shortDescription: "A structured decorative textile with a rich surface, suitable for ceremonial and statement garments.",
      overview: "Heritage Brocade combines a firm structure with ornamental surface detail. The pattern, colour and thread composition can be discussed around the intended garment or collection.",
      price: "From ₦22,000 / metre",
      heroClass: "texture-brocade",
      featured: true,
      threads: [
        { name: "Ground thread", material: "Cotton / polyester", note: "Strong woven foundation" },
        { name: "Decorative thread", material: "Viscose / metallic option", note: "Creates surface pattern and sheen" }
      ],
      process: [
        ["01", "Design direction", "We establish the visual language, pattern and intended application."],
        ["02", "Thread selection", "Ground and decorative threads are chosen to balance appearance and durability."],
        ["03", "Pattern construction", "The decorative structure is woven into the base according to the approved specification."],
        ["04", "Finishing & inspection", "The finished cloth is stabilised, finished and checked before delivery."]
      ],
      gallery: [
        { label: "Pattern detail", className: "texture-brocade" },
        { label: "Rich surface", className: "texture-gold" },
        { label: "Finished piece", className: "texture-purple" }
      ]
    },
    {
      slug: "signature-cotton",
      name: "Signature Cotton",
      shortDescription: "A versatile, breathable cotton construction designed for everyday premium garments and collections.",
      overview: "Signature Cotton is a dependable base for clients who want a natural hand, comfort and versatility. Weight, weave density and colour can be adjusted for the intended application.",
      price: "From ₦9,500 / metre",
      heroClass: "texture-cotton",
      featured: true,
      threads: [
        { name: "Primary thread", material: "100% cotton", note: "Natural hand and breathability" },
        { name: "Optional blend", material: "Cotton / linen", note: "Adds texture and structure" }
      ],
      process: [
        ["01", "Requirements", "We define the garment type, desired hand, weight and colour."],
        ["02", "Yarn preparation", "The selected cotton yarn is prepared for consistent production."],
        ["03", "Weaving", "Threads are woven to the agreed density and construction."],
        ["04", "Wash & finish", "The fabric is washed, finished and checked for consistency."]
      ],
      gallery: [
        { label: "Natural texture", className: "texture-cotton" },
        { label: "Woven detail", className: "texture-cotton-alt" },
        { label: "Finished garment", className: "texture-gold" }
      ]
    }
  ]
};
