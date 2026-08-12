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
    name: "Maison Fabrics",
    shortName: "Maison"
  },

  contact: {
    whatsapp: "https://wa.me/2348000000000",
    instagram: "https://instagram.com/yourhandle"
  },

  fabrics: [
    {
      slug: "royal-silk",
      name: "Royal Silk",
      shortDescription: "A smooth, luminous fabric with an elegant drape for statement garments and premium pieces.",
      overview: "Royal Silk is designed for clients who want a refined surface, fluid movement and a polished finish. It can be produced around your preferred colour, weight and final application.",
      price: "From ₦18,000 / metre",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
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
        { label: "Finished drape", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85" },
        { label: "Surface detail", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1000&q=85" },
        { label: "Finished garment", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=85" }
      ]
    },
    {
      slug: "heritage-brocade",
      name: "Heritage Brocade",
      shortDescription: "A structured decorative textile with a rich surface, suitable for ceremonial and statement garments.",
      overview: "Heritage Brocade combines a firm structure with ornamental surface detail. The pattern, colour and thread composition can be discussed around the intended garment or collection.",
      price: "From ₦22,000 / metre",
      image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=1200&q=85",
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
        { label: "Pattern detail", image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=1000&q=85" },
        { label: "Rich surface", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=85" },
        { label: "Finished piece", className: "texture-purple" }
      ]
    },
    {
      slug: "signature-cotton",
      name: "Signature Cotton",
      shortDescription: "A versatile, breathable cotton construction designed for everyday premium garments and collections.",
      overview: "Signature Cotton is a dependable base for clients who want a natural hand, comfort and versatility. Weight, weave density and colour can be adjusted for the intended application.",
      price: "From ₦9,500 / metre",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85",
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
        { label: "Natural texture", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85" },
        { label: "Woven detail", image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=1000&q=85" },
        { label: "Finished garment", className: "texture-gold" }
      ]
    }
  ]
};
