import { Calendar, Camera, Music, Smile } from 'lucide-react';
import bday1 from '../assets/images/1.jpeg';
import bday2 from '../assets/images/2.jpeg';
import bday3 from '../assets/images/3.jpeg';
import bday5 from '../assets/images/5.jpeg';
import bday8 from '../assets/images/8.jpeg';
import festive4 from '../assets/images/4.webp';
import diwali6 from '../assets/images/diwali6.png';
import bouncingCastle from '../assets/images/k1.jpg';
import galleryNew1 from '../assets/gallery_new_1.png';
import anniversaryHome from '../assets/images/anniversary_home.png';
import roomDecorationHome from '../assets/images/room_decoration_home.png';
import womensDayHome from '../assets/images/womens_day_home.png';
import toysAndGiftsImg from '../assets/images/toys_and_gifts.png';

// Image imports
const cocomelonDecor = "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800";



export const decorationCategories = [
    {
        id: 1,
        title: "Anniversary Decorations",
        image: anniversaryHome,
        products: [
            {
                id: 2,
                name: "Heart Backdrop",
                price: "$120",
                image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800",
                rating: 4.8,
                reviewCount: 156,
                description: "A gorgeous heart-shaped backdrop featuring premium red balloons and warm LED fairy lights. Perfect for romantic anniversaries and surprise proposals.",
                inclusions: [
                    "200 Premium Red Balloons",
                    "LED Fairy Lights (10m)",
                    "Heart Shape Frame Rental",
                    "Professional Setup & Cleanup"
                ],
                exclusions: [
                    "Outside city limits delivery",
                    "Fresh flower arrangements"
                ],
                thingsToRemember: [
                    "Setup time is roughly 45-60 minutes",
                    "Requires 1 dedicated power point",
                    "Foil balloons stay inflated for 24+ hours indoors"
                ],
                policies: {
                    cancellation: "Cancel up to 24 hours before for full refund.",
                    refund: "Refunds processed to original payment method."
                }
            },
            {
                id: 4,
                name: "Premium Red & Gold Anniversary Decor",
                price: "$150",
                image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800",
                rating: 4.9,
                reviewCount: 210,
                description: "Elegant gold chrome balloons combined with velvet red accents. This setup includes a large anniversary foil banner and professional lighting.",
                inclusions: [
                    "50 Gold Chrome Balloons",
                    "100 Velvet Red Balloons",
                    "Happy Anniversary Foil Letters",
                    "Spot Lighting",
                    "Silver Sequin Backdrop"
                ],
                exclusions: [
                    "氦气 (Helium) filling",
                    "Catering services"
                ],
                thingsToRemember: [
                    "Metallic balloons can be sensitive to sharp objects",
                    "Ideal for indoor living rooms"
                ]
            },
            { id: 5, name: "Elegant Anniversary Arch", price: "$199", image: "https://www.partyone.in/suploads/2025/Feb/06/39306/1738839405IMG_E7413-Anniversary-1-1.webp", rating: 4.7, reviewCount: 89, description: "A massive balloon arch with a mix of pastel and metallic finishes. Includes a custom neon sign and floral arrangements." },
            { id: 7, name: "Luxury Anniversary Heart Setup", price: "$249", image: "https://www.partyone.in/suploads/2025/Feb/22/39336/1740208361image-46.webp", rating: 5.0, reviewCount: 45, description: "Our most premium anniversary setup. Features a giant 3D heart structure, imported flowers, and a professional photographer for 30 minutes." },
            { id: 8, name: "Grandeur Anniversary Stage", price: "$299", image: "https://www.partyone.in/suploads/2025/Aug/01/39727/1754041288ChatGPT-Image-Jul-29-2025-09_48_06-AM.webp", rating: 4.8, reviewCount: 67, description: "Transform your living room into a grand stage. Includes stage flooring, sequin backdrop, and high-end lighting effects." },
            { id: 9, name: "Golden Anniversary Ring Backdrop", price: "$175", image: "https://www.partyone.in/suploads/2024/Jun/25/38848/1719308161IMG_6984.MOV_snapshot_00.01.webp", rating: 4.6, reviewCount: 112, description: "A trendy circular ring setup with gold metallic balloons and silk flowers. Ideal for compact spaces and stylish photos." },
            { id: 10, name: "Heart Shape Anniversary Decor", price: "$210", image: "https://www.partyone.in/suploads/2024/Mar/27/38783/1711541045Heart_shape_Anniversary_Decor.webp", rating: 4.7, reviewCount: 94, description: "Unique heart-shaped wall mount decoration using over 200 premium balloons. Comes with a personalized name board." },
            { id: 11, name: "Romantic Golden Rings Setup", price: "$185", image: "https://www.partyone.in/suploads/2024/Oct/01/39015/1727783073WhatsApp-Image-2024-08-28-at-10.03.webp", rating: 4.9, reviewCount: 134, description: "Interlocking golden rings symbolizing eternal love. Features premium white lilies and soft glowing lanterns." },
            { id: 12, name: "Grand Anniversary Stage 2", price: "$320", image: "https://www.partyone.in/suploads/2025/Aug/05/39744/175437741610-2-1.webp", rating: 4.8, reviewCount: 56, description: "A wider stage setup with multi-layered backdrops, smoke machine effect, and professional spot lighting." },
            { id: 13, name: "Pink & Gray Premium Decor", price: "$185", image: "https://www.partyone.in/suploads/2026/Jan/30/38800/1769783757Pink-Gray-Decoration-1.webp", rating: 4.5, reviewCount: 178, description: "Sophisticated pink and gray color palette. Includes matte finish balloons and elegant silver streamers." },
            { id: 14, name: "Romantic Stage Decor", price: "$240", image: "https://www.partyone.in/suploads/2025/Aug/01/39729/17540457321-2.webp", rating: 4.9, reviewCount: 82, description: "A romantic stage focused on red roses and warm lighting. Features a plush carpet and comfortable seating area setup." },
            { id: 15, name: "Classic Anniversary Setup", price: "$120", image: "https://www.partyone.in/suploads/2023/Oct/03/38214/16963240481.webp", rating: 4.4, reviewCount: 320, description: "Our timeless classic anniversary decor. Simple, elegant, and budget-friendly. Includes balloons, ribbons, and banner." },
            { id: 16, name: "Gold & White Elegant Decor", price: "$165", image: "https://www.partyone.in/suploads/2024/Aug/22/38969/17243062305-Upload.webp", rating: 4.7, reviewCount: 145, description: "A pristine gold and white theme that screams luxury. Includes balloon clusters and customized ceiling hangings." },
            { id: 17, name: "Basic Anniversary Decor", price: "$89", image: "https://www.partyone.in/suploads/2024/Mar/21/38732/1711015893Basic_Anniversary_Decor2.webp", rating: 4.2, reviewCount: 450, description: "Essential anniversary decorations including a 'Happy Anniversary' banner and 50 nitrogen-filled balloons." }
        ]
    },
    {
        id: 2,
        title: "Womens Day Decorations",
        image: womensDayHome,
        products: [
            { id: 4, name: "Floral Pink Backdrop", price: "$165", image: "https://www.partyone.in/suploads/2026/Feb/09/40114/1770655784Edited-1-10.webp" },
            { id: 5, name: "Elegant Pastel Decor", price: "$110", image: "https://www.partyone.in/suploads/2026/Feb/09/40112/1770652884Edited-1-8.webp" },
            { id: 6, name: "Modern Empowerment Setup", price: "$199", image: "https://www.partyone.in/suploads/2026/Feb/16/40115/1771243093Edited-1.webp" },
            { id: 7, name: "Deluxe Women's Day Stage", price: "$280", image: "https://www.partyone.in/suploads/2026/Feb/09/40120/1770658899Edited-2-15.webp" },
            { id: 8, name: "Vibrant Balloon Wall", price: "$145", image: "https://www.partyone.in/suploads/2026/Feb/09/40119/1770658371Edited-1-15.webp" },
            { id: 9, name: "Floral Ring Decor", price: "$185", image: "https://www.partyone.in/suploads/2026/Feb/09/40113/1770653862Edited-7-2.webp" },
            { id: 10, name: "Premium Orchid Setup", price: "$220", image: "https://www.partyone.in/suploads/2026/Feb/16/40117/1771242880Edited-1.webp" }
        ]
    },
    {
        id: 3,
        title: "Room Decorations",
        image: roomDecorationHome,
        products: [
            { id: 4, name: "Pink & Soft Theme", price: "$85", image: "https://www.bing.com/th/id/OIP.bXU5CkQ57gUe8bVYjA1JSAHaNK?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
            { id: 5, name: "Elegant Room Arch", price: "$125", image: "https://th.bing.com/th/id/OIP.jgZfcjPIkOH_BCa7yWX6MwHaFj?w=250&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 6, name: "Premium Night Setup", price: "$199", image: "https://th.bing.com/th/id/OIP.HFEI54iU9h6NYfZeElIF2wHaFk?w=236&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 7, name: "Golden Glow Room", price: "$175", image: "https://th.bing.com/th/id/OIP.qslTW7-UCHvse0wKuDLKcwHaE0?w=299&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 8, name: "Classic Room Decor", price: "$110", image: "https://th.bing.com/th/id/OIP.HxFMUmWFrxyFFX7KkBhOAgHaHa?w=194&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 9, name: "Lush Pastel Setup", price: "$155", image: "https://th.bing.com/th/id/OIP.YT2pbjAov_E6IFeVkxCH7gHaE0?w=268&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 10, name: "Luxury Floral Arch", price: "$210", image: "https://th.bing.com/th/id/OIP.3UEiouYI4PWmBOCOZd9cVAHaFj?w=273&h=205&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 11, name: "Modern White Theme", price: "$135", image: "https://th.bing.com/th/id/OIP.l4QAG3gUbOPfeUkBC6zxqAHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 12, name: "Pink Pillar Decor", price: "$95", image: "https://th.bing.com/th/id/OIP.KGH65VAcbuOjV8-ZOgNaKgHaJR?w=149&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]
    },
    {
        id: 4,
        title: "Bachelor Party Decorations",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
        products: [
            { id: 6, name: "Classic 'Last Fling' Setup", price: "$145", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" },
            { id: 8, name: "Gold Mirror Set", price: "$225", image: "https://th.bing.com/th/id/OIP.Q15gf4xXkBs1OGYNP-Fu8QHaE8?w=302&h=201&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 9, name: "Luxury Black Wall", price: "$260", image: "https://th.bing.com/th/id/OIP.6d4kkM9MulbiG4FKTMKKTwHaHa?w=165&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 10, name: "Golden Arch Night", price: "$215", image: "https://th.bing.com/th/id/OIP.RskU41s8KXDseEAwrL0RkwHaE8?w=234&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 11, name: "Premium Lounge Arch", price: "$280", image: "https://th.bing.com/th/id/OIP.pqHR-N7pzAh0DoVqgRMvfQHaE8?w=283&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 12, name: "Casino Gold Theme", price: "$310", image: "https://th.bing.com/th/id/OIP.Kmi_88_VQrA4f0PJawSMPwHaE8?w=298&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]
    },
    {
        id: 5,
        title: "Haldi Decorations",
        image: "https://th.bing.com/th/id/OIP.jn2NvIcr-jyrTH4Gcu9aJwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        products: [
            { id: 1, name: "Elegant Portrait Backdrop", price: "$165", image: "https://d397bfy4gvgcdm.cloudfront.net/364360-Ayesha-ShrayHaldi-42-orig.jpeg" },
            { id: 2, name: "Traditional Haldi Lounge", price: "$290", image: "https://i.pinimg.com/736x/35/1e/44/351e4434f8421820ee5e91e76b2b1c86.jpg" },
            { id: 3, name: "Vibrant Garland Arch", price: "$210", image: "https://tse1.mm.bing.net/th/id/OIP.vqvkGOfp68jwDxKCXVpDAgHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3" },
            { id: 4, name: "Minimalist Floral Arch", price: "$135", image: "https://tse3.mm.bing.net/th/id/OIP.rMrGhY126E0jpaBLf4mXHgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" },
            { id: 5, name: "Garden Garland Setup", price: "$195", image: "https://tse3.mm.bing.net/th/id/OIP.RHvVg_s-SNQ_dCaMLA0BhgAAAA?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3" },
            { id: 6, name: "Royal Haldi Stage 2", price: "$325", image: "https://tse2.mm.bing.net/th/id/OIP.jBtELOGELzsyRaLE4JpiBgHaFj?pid=ImgDet&w=184&h=138&c=7&dpr=1.3&o=7&rm=3" },
            { id: 7, name: "Luxury Haldi Stage", price: "$380", image: "https://www.weddingsutra.com/images/wedding-images/real_wed/featured/nasthasia-sharan/nasthasia-sharan-25.webp" },
            { id: 8, name: "Sunflower Arch Decor", price: "$160", image: "https://tse4.mm.bing.net/th/id/OIP.--SlGM1Gom3yNV6N19bE2wHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" },
            { id: 9, name: "Traditional Lotus Theme", price: "$295", image: "https://tse2.mm.bing.net/th/id/OIP.1fHfKOVeq9waxBqfQL3sxwHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" },
            { id: 10, name: "Luxury Haldi Stage 2", price: "$350", image: "https://th.bing.com/th/id/OIP.OiTo8Hh0NlhBfPg8BNVPcAHaE8?w=291&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]
    },
    {
        id: 6,
        title: "Retirement Decorations",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
        products: [
            { id: 1, name: "Golden Years Celebration", price: "$230", image: "https://th.bing.com/th/id/OIP.qAsUODl9wXzULl_tOHd-XwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 2, name: "Professional Send-off Set", price: "$180", image: "https://th.bing.com/th/id/OIP.iYXmGLBkcwj2Ei4fpmZ9XwHaFj?w=247&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 3, name: "Balloon Arch Farewell", price: "$215", image: "https://m.media-amazon.com/images/I/81qL29UkdoL._AC_UF1000,1000_QL80_.jpg" },
            { id: 4, name: "Shimmering Silver Theme", price: "$260", image: "https://img.lazcdn.com/g/p/c883ebcb2aa0e21844c28bf4eb162eb0.jpg_720x720q80.jpg" },
            { id: 5, name: "Elegant Black & Gold Arch", price: "$245", image: "https://tse1.mm.bing.net/th/id/OIP.ewBwcocP9Co23oCX336_JwAAAA?pid=ImgDet&w=206&h=206&c=7&dpr=1.3&o=7&rm=3" },
            { id: 6, name: "Classic Navy Farewell", price: "$225", image: "https://tse3.mm.bing.net/th/id/OIP.J4_gRJ303-S0khUYpT7b_gHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3&o=7&rm=3" },
            { id: 7, name: "Modern Rose Gold Theme", price: "$195", image: "https://th.bing.com/th/id/OIP.qXRallFCJVvH1GIjMtdcogHaHa?w=210&h=210&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 8, name: "Grand Retirement Arch", price: "$310", image: "https://th.bing.com/th/id/OIP.-KbSlhg6NO_cb_Fe9_pwpAHaEo?w=289&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]
    },
    {
        id: 7,
        title: "Mother's Day Decorations",
        image: "https://th.bing.com/th/id/OIP.HvX8yzsA66bwE9oLFmLGpAHaHa?w=152&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        products: [
            { id: 1, name: "Premium Floral Portrait", price: "$185", image: "https://th.bing.com/th/id/OIP.sAyH7fyljwaZKRjVRAS4PwHaJQ?w=142&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 2, name: "Elegant Mom Backdrop", price: "$240", image: "https://th.bing.com/th/id/OIP.PfhkR4G6i_p7H8Fp6zW1zQHaJQ?w=163&h=204&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 3, name: "Pink Blossom Ring Decor", price: "$210", image: "https://tse2.mm.bing.net/th/id/OIP.BbRt_h4v9GSMyCFpR9naeQHaH5?pid=ImgDet&w=184&h=196&c=7&dpr=1.3&o=7&rm=3" },
            { id: 4, name: "Classic Mother's Day Arch", price: "$199", image: "https://tse1.mm.bing.net/th/id/OIP.AHN-dmJi-6feRlKKVsU_zwHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" },
            { id: 5, name: "Vibrant Floral Wall Theme", price: "$275", image: "https://tse1.mm.bing.net/th/id/OIP.viS1IB1Z1sORzeB05NphdwHaG_?pid=ImgDet&w=184&h=173&c=7&dpr=1.3&o=7&rm=3" }
        ]
    },
    {
        id: 8,
        title: "Father's Day Decorations",
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
        products: [
            { id: 1, name: "Gentle Blue Dad Decor", price: "$180", image: "https://th.bing.com/th/id/OIP.DuAH_tU7p3FviE12AfNSPgHaHa?w=184&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 2, name: "Classic Dad Foil Balloon", price: "$145", image: "https://th.bing.com/th/id/OIP.OOniUBXbdoy1XrwXd4UNTQHaM9?w=115&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 3, name: "Premium Blue & Gold Set", price: "$290", image: "https://img.freepik.com/premium-photo/blue-background-fathers-day-including-blue-balloons-gift-boxes-generative-ai_1219132-1480.jpg?w=2000" }
        ]
    }
];

export const birthdayDecorations = [






    {
        id: 108,
        title: "Elegant Gold & Black Theme",
        image: bday1,
        price: 2999,
        originalPrice: 3999,
        discountPercentage: 25,
        rating: 4.8,
        reviewCount: 184,
        description: "A sophisticated gold and black theme for a premium birthday celebration. Includes metallic balloons, sequin backdrop, and elegant cake table decor.",
        inclusions: [
            "100 Metallic Balloons (Gold & Black)",
            "Happy Birthday Foil Letters",
            "2 Gold Star Foil Balloons",
            "16ft Balloon Arch",
            "Professional Setup"
        ],
        exclusions: [
            "Outside city limits delivery",
            "Cake table rental",
            "LED numbers"
        ],
        thingsToRemember: [
            "Please ensure power socket is available for air blower",
            "Setup takes approximately 60-90 minutes",
            "Balloon colors can be customized as per availability"
        ],
        policies: {
            cancellation: "Free cancellation up to 24 hours before the event.",
            refund: "100% refund for valid cancellations."
        }
    },
    {
        id: 109,
        title: "Pink & Purple Princess Arch",
        image: bday2,
        price: 3299,
        originalPrice: 4499,
        discountPercentage: 26,
        rating: 4.9,
        reviewCount: 256,
        description: "Make your little girl feel like royalty with our Pink & Purple Princess Arch. Features pastel shades, shimmering curtains, and custom fairy lights.",
        inclusions: [
            "150 Pastel Balloons (Pink & Purple)",
            "Princess Theme Cutouts",
            "Silver Sequin Backdrop",
            "LED Fairy Lights",
            "Setup & Cleanup"
        ],
        exclusions: [
            "Balloon bouquets for tables",
            "Themed cake table"
        ],
        thingsToRemember: [
            "Wall-safe tapes will be used for decorations",
            "Best suited for indoor venues",
            "Requires 2 hours for complete setup"
        ],
        policies: {
            cancellation: "Cancellation fee of 20% if cancelled within 12 hours.",
            refund: "Partial refund processed within 5-7 business days."
        }
    },
    {
        id: 110,
        title: "Red & White Birthday Set",
        image: bday3,
        price: 2499,
        originalPrice: 3499,
        discountPercentage: 28,
        rating: 4.7,
        reviewCount: 142,
        description: "The classic birthday color combination. High-impact red and white balloon clusters with a large foil birthday banner and floating ribbons."
    },
    {
        id: 111,
        title: "Boss Baby Theme Decor",
        image: bday5,
        price: 4999,
        originalPrice: 6999,
        discountPercentage: 28,
        rating: 5.0,
        reviewCount: 98,
        description: "Get ready for a business-themed blast! This Boss Baby setup includes life-sized cutouts, money bag balloon weights, and professional suit-themed backdrops."
    },
    {
        id: 112,
        title: "Butterfly Garden Theme",
        image: bday8,
        price: 4299,
        originalPrice: 5999,
        discountPercentage: 28,
        rating: 4.8,
        reviewCount: 124,
        description: "Transform your space into a magical garden. Delicate butterfly ornaments, flower-shaped balloon clusters, and green leafy streamers create a serene atmosphere."
    },
    {
        id: 115,
        title: "Gold & Blue Theme",
        image: "https://th.bing.com/th/id/OIP.UC8ufaJHiQipQr_9J8ZyfgHaE8?w=236&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        price: 3299,
        originalPrice: 4499,
        discountPercentage: 26,
        rating: 4.6,
        reviewCount: 210,
        description: "A royal combination of royal blue and metallic gold. Perfect for adult birthdays or first birthdays alike. Modern and stylish."
    },
    {
        id: 116,
        title: "Elegant Room Setup",
        image: "https://th.bing.com/th/id/OIP.IdYWoBJ1upcSeatxM4btmQHaFj?w=262&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        price: 4299,
        originalPrice: 5999,
        discountPercentage: 28,
        rating: 4.9,
        reviewCount: 76,
        description: "For those who prefer a more personalized touch. This setup focuses on transforming every corner of the room with carefully placed balloon bouquets and floor decor."
    }
];

export const festivalDecorations = [
    {
        id: 201,
        title: "Diwali Decorations",
        image: "https://png.pngtree.com/thumb_back/fw800/background/20240930/pngtree-diwali-decoration-background-image_16294734.jpg",
        price: 1499,
        originalPrice: 1999,
        discountPercentage: 25,
        products: [
            { id: 2, name: "Diwali Decor 2", price: "₹1899", image: "https://th.bing.com/th/id/OIP.pKpfLhJXkRHsRUpqyuOCCgHaEc?w=304&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 3, name: "Diwali Decor 3", price: "₹2199", image: "https://deowgxgt4vwfe.cloudfront.net/uploads/1664181289_large.jpg" },
            { id: 4, name: "Diwali Decor 4", price: "₹1599", image: "https://tse1.mm.bing.net/th/id/OIP.gbDa-P9tgqe36zUjnOy_5AAAAA?pid=ImgDet&w=187&h=334&c=7&dpr=1.3&o=7&rm=3" },
            { id: 5, name: "Diwali Decor 5", price: "₹1799", image: "https://tse1.mm.bing.net/th/id/OIP.7AzIpY6lUeuBj7gz9yMWNQAAAA?pid=ImgDet&w=187&h=187&c=7&dpr=1.3&o=7&rm=3" },
            { id: 6, name: "Diwali Decor 6", price: "₹2499", image: "https://static.vecteezy.com/system/resources/previews/030/278/538/non_2x/a-colorful-wedding-stage-with-flowers-and-garlands-ai-generated-free-photo.jpg" },
            { id: 7, name: "Diwali Decor 7", price: "₹2299", image: "https://static.vecteezy.com/system/resources/previews/030/284/413/large_2x/a-colorful-wedding-stage-decorated-with-garlands-and-flowers-ai-generated-free-photo.jpg" },
            { id: 8, name: "Diwali Decor 8", price: "₹1999", image: "https://static.vecteezy.com/system/resources/previews/030/278/697/non_2x/a-colorful-wedding-ceremony-with-flowers-and-lights-ai-generated-free-photo.jpg" },
            { id: 9, name: "Diwali Decor 9", price: "₹1699", image: "https://png.pngtree.com/thumb_back/fw800/background/20240930/pngtree-diwali-decoration-background-image_16294734.jpg" }
        ]
    },
    {
        id: 203,
        title: "Ganesh Chaturthi Decor",
        image: "https://cdn.shopify.com/s/files/1/0525/5285/9819/files/Ganesh_chaturthi_01.jpg?v=1755525875",
        price: 1799,
        originalPrice: 2499,
        discountPercentage: 28,
        products: [
            { id: 1, name: "Ganesh Chaturthi Decor 1", price: "₹1799", image: "https://cdn.shopify.com/s/files/1/0525/5285/9819/files/Ganesh_chaturthi_01.jpg?v=1755525875" },
            { id: 2, name: "Ganesh Chaturthi Decor 2", price: "₹1999", image: "https://tse1.explicit.bing.net/th/id/OIP.YredVmJFynL6qJ27D2bwLAAAAA?pid=ImgDet&w=184&h=229&c=7&dpr=1.3&o=7&rm=3" },
            { id: 3, name: "Ganesh Chaturthi Decor 3", price: "₹1899", image: "https://tse3.mm.bing.net/th/id/OIP.GvtzOPWM8pHBtVThX3nifQHaHT?pid=ImgDet&w=184&h=181&c=7&dpr=1.3&o=7&rm=3" },
            { id: 4, name: "Ganesh Chaturthi Decor 4", price: "₹2199", image: "https://tse1.mm.bing.net/th/id/OIP.4Kl4Zak-kMqHg45hd_gCgAHaHA?pid=ImgDet&w=184&h=173&c=7&dpr=1.3&o=7&rm=3" },
            { id: 5, name: "Ganesh Chaturthi Decor 5", price: "₹2499", image: "https://i.pinimg.com/736x/7a/51/ba/7a51baa0ef9287b940d7cbf488454a95.jpg" },
            { id: 6, name: "Ganesh Chaturthi Decor 6", price: "₹1699", image: "https://tse1.explicit.bing.net/th/id/OIP.0icg11C0864AEW7PWPgRvgHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3" },
            { id: 7, name: "Ganesh Chaturthi Decor 7", price: "₹1599", image: "https://tse1.explicit.bing.net/th/id/OIP.02U3Q592riLH2EnUhJVPRwAAAA?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" },
            { id: 8, name: "Ganesh Chaturthi Decor 8", price: "₹2299", image: "https://tse3.mm.bing.net/th/id/OIP.Io4qhXP5pSAf7_gX9-kOlgHaJ3?pid=ImgDet&w=184&h=245&c=7&dpr=1.3&o=7&rm=3" },
            { id: 9, name: "Ganesh Chaturthi Decor 9", price: "₹1999", image: "https://tse4.mm.bing.net/th/id/OIP.Z6cATwK4NU5BR01d5tHQbQHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3" }
        ]
    },
    {
        id: 204,
        title: "Sankranthi Special Decor",
        image: "https://th.bing.com/th/id/OIP.J9nZcQJgx3WDythbbgJKSwHaDt?w=309&h=175&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        price: 1599,
        originalPrice: 2199,
        discountPercentage: 27,
        products: [
            { id: 1, name: "Traditional Kite Theme", price: "₹1599", image: "https://th.bing.com/th/id/OIP.OwznJUrqaC5Y-ceVrFQNMAHaFy?w=232&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 3, name: "Village Festival Setup", price: "₹2199", image: "https://i.pinimg.com/736x/33/33/7f/33337f2eb78d29d18260b1f29f76a805.jpg" },
            { id: 4, name: "Sankranthi Floral Arch", price: "₹1799", image: "https://tse2.mm.bing.net/th/id/OIP.rCsQSV30SpFvdvwh8gvfmQHaFF?pid=ImgDet&w=187&h=128&c=7&dpr=1.3&o=7&rm=3" },
            { id: 5, name: "Harvest Celebration Backdrop", price: "₹1999", image: "https://th.bing.com/th/id/OIP.WCiDuitb-7z-xaR5Acog2wHaEK?w=285&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 6, name: "Traditional Pillar Decor", price: "₹2499", image: "https://th.bing.com/th/id/OIP.jeBLDhu199o_z70bZFw9FQHaKa?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 7, name: "Sankranthi Royal Entrance", price: "₹2999", image: "https://th.bing.com/th/id/OIP.FI2DkfxHEP_Bn2PcnQkgJwHaNK?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]
    },
    {
        id: 205,
        title: "Traditional Pongal Setup",
        image: "https://i.pinimg.com/originals/f0/f0/e3/f0f0e361722af38bdbe0094b38061465.jpg",
        price: 1699,
        originalPrice: 2399,
        discountPercentage: 29,
        products: [
            { id: 1, name: "Harvest Festive Stage", price: "₹1699", image: "https://th.bing.com/th/id/OIP.QaklFGQl5JW9BaS1IeouqwHaE8?w=200&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 2, name: "Traditional Sugarcane Arch", price: "₹1899", image: "https://th.bing.com/th/id/OIP.yxCACPAAnyNHPm3Lh0M9oAHaJ3?w=140&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 3, name: "Pongal Floral Rangoli", price: "₹1499", image: "https://th.bing.com/th/id/OIP.CSM-27378i8HQpqedQLWbgHaHa?w=173&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 4, name: "Village Style Backdrop", price: "₹2199", image: "https://th.bing.com/th/id/OIP.kjSFfVnDEuR4pSRshfG9_gHaE7?w=290&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 5, name: "Royal Pongal Entrance", price: "₹2499", image: "https://th.bing.com/th/id/OIP.R2yzS_AqcK9RES2ryvuvQgHaEK?w=321&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 6, name: "Golden Harvest Setup", price: "₹2999", image: "https://th.bing.com/th/id/OIP.ETNE9QPpo5DUqP7fOYpQQgHaEK?w=308&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 7, name: "Lush Green Festival Wall", price: "₹1999", image: "https://www.bing.com/th/id/OIP.FryWq99lQtT8Y1AhR7ArJgAAAA?w=184&h=213&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 8, name: "Premium Temple Theme", price: "₹3499", image: "https://tse1.mm.bing.net/th/id/OIP.0o7h0yxM4Kh003r1_d8THwHaJ4?pid=ImgDet&w=184&h=245&c=7&dpr=1.3&o=7&rm=3" }
        ]
    },
    {
        id: 9,
        title: "Christmas Decor",
        image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80&w=800",
        price: 1499,
        originalPrice: 1999,
        discountPercentage: 25,
        products: [
            { id: 1, name: "Christmas Decor 1", price: "₹1999", image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80&w=800" },
            { id: 2, name: "Christmas Decor 2", price: "₹2499", image: "https://i.pinimg.com/originals/44/60/89/446089f9af301be955ed538d2e929c69.jpg" },
            { id: 3, name: "Christmas Decor 3", price: "₹2199", image: "https://tse2.mm.bing.net/th/id/OIP.DYZmdarS-JbuFrNkrM8zuAHaEo?w=1024&h=640&rs=1&pid=ImgDetMain&o=7&rm=3" },
            { id: 4, name: "Christmas Decor 4", price: "₹1899", image: "https://tse3.mm.bing.net/th/id/OIP.WFL1PONd-yxZaAkpwnTUpAHaE7?w=929&h=619&rs=1&pid=ImgDetMain&o=7&rm=3" },
            { id: 5, name: "Christmas Decor 5", price: "₹1599", image: "https://tse4.mm.bing.net/th/id/OIP.AlhcC7HNd7Dt_lUhNCKs4AHaEl?w=970&h=600&rs=1&pid=ImgDetMain&o=7&rm=3" },
            { id: 6, name: "Christmas Decor 6", price: "₹1499", image: "https://m.media-amazon.com/images/I/51RPaZdOjyL._AC_.jpg" },
            { id: 7, name: "Christmas Decor 7", price: "₹1799", image: "https://tse3.mm.bing.net/th/id/OIP.XpYxM7lXIpcOKLUIZ_Cn4QHaHa?pid=ImgDet&w=187&h=187&c=7&dpr=1.3&o=7&rm=3" },
            { id: 8, name: "Christmas Decor 8", price: "₹1699", image: "https://tse2.mm.bing.net/th/id/OIP.BPjWDB9BA4LgBIGsTi6ABAHaFD?pid=ImgDet&w=187&h=127&c=7&dpr=1.3&o=7&rm=3" },
            { id: 9, name: "Christmas Decor 9", price: "₹2299", image: "https://tse1.mm.bing.net/th/id/OIP.M04nJskmIKvyNXTt7xvRsQHaHa?pid=ImgDet&w=187&h=187&c=7&dpr=1.3&o=7&rm=3" },
            { id: 10, name: "Christmas Decor 10", price: "₹1999", image: "https://tse1.mm.bing.net/th/id/OIP.6aVWYWkTDASpn-W3yhotuwHaHa?pid=ImgDet&w=187&h=187&c=7&dpr=1.3&o=7&rm=3" }
        ]
    },
];


export const corporateDecorations = [
    {
        id: 301,
        title: "Product Launch Decor",
        image: "https://th.bing.com/th/id/OIP.I_rMZWVHBtgc3MmChqE_aQHaEK?w=296&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        products: [
            { id: 1, name: "Product Launch Decor 1", price: "$350", image: "https://th.bing.com/th/id/OIP.I_rMZWVHBtgc3MmChqE_aQHaEK?w=296&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 2, name: "Product Launch Decor 2", price: "$320", image: "https://th.bing.com/th/id/OIP.2txz_XAOTo9tdi3e4H2fLQHaEJ?w=296&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 3, name: "Product Launch Decor 3", price: "$280", image: "https://th.bing.com/th/id/OIP.8Lf3Efou89BIPFpvc0E6qAHaE8?w=250&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 4, name: "Product Launch Decor 4", price: "$450", image: "data:image/webp;base64,UklGRoA5AABXRUJQVlA4IHQ5AABw4ACdASqLAeoAPp1Cm0klo6IkK5TdGLATiWJt/3MJQFR+sdviELjn31/H89bj3xO+PaXH9PwM+P8jV8P/r+t/+o/7X2F/7B6HfUd/dPRT+6nqpf+D1+f3n0meq09FvpqrTf5j/qvDfzr/HtprA/ah9x34nrd/u/BX5Tahft70M4PPVL8j0I/df8F5uv5nm79ufYC/Xb1E8KP77/5PYG/qH+i9Yj/d8vf7R/xfYX6X/o7Dp8IHhmUtMU4xBfpaGth8+sEJFkaT7D5NOGcnnbnu8ARh59ibl1GkNSSHvo1YqXA75LSs4NVqioBP5bWTVn5zHnNuFwqqGwg3N9XyX347zzLLH5eCcT2r81nIcZl+QPTauGxQpsw6SlXGxz/2fuYDkD/zXbzoCtDkMmWPch8m+urb/dmV9hwKh+38UoNFbOG9IsU79ZsZHkm0LBx82ESZf4J4mOHQ352XA5V2lt5wuyzf+xZ3JDRqarkc/P6pKhKxEJmjp49AwSD7FDS/YEdAUDGZjJd91+3s455FAmPlj62TlM6TM8+8wOBDrNZxh+/irEqe5KM88mC8tw8ZFP17kA606OZLh4cK5m0BG1QikVHp1CaOjKtNU+ndK6hmscpSAAkVl6VfMnfSk6uJcy8BctzhCYkEph/5oKXhX5LYKCuUp4Pk2aRuCItQ3vGQpDecvbIKz3V+sVNx6WMQuemZ0z9ynmNlCNckA26SdiUpofWeVYIO31QMvTJwGa5ykKVw4jmSKiM72TXxNSyUH/QVvcBcPTU/KGx6NkezFHZgVHI+/Wl/vH40+50sWu38AuDZO5lrSPOHvH42ysFZMjqoJEzEJB1q0e4o1K7Bh7g1b7ir6i6B0UF+JfPnQqCI2q3eL+g0lNjNEa1XcZqoX7fozcB4r1Vzxs/aeMcjdUqk2dVvZBw2K1fDuGry6JGXYOOd+qBkjQ+pJsQqwYr3BFQ92TgvJWniFKh0PoJbivsF0RAc+aNY44cjYDGYp8Exqdda5g5Dl2vOfj9m7Q+oDQk+ahKvHk5XwC5kA6wo4rcJaFBDSzuF6/XQypwutGRcbK0NixQqjWbf+Xq741k43Be+U9WnecSyk6SWuUG5EdU3stRnPnkGCBKngci5ZkRVWYUcgmcmY9Og6c82NksvXnYOvKS7oZZG/zj9DMUs4PbHWQrTZYAfttBAgKnQewky0UDrHqBqhvB2Fv9vwArRpWEBw2GT3GsBXlIHzWv8UQ0Mk7ppkNo7dVhMzxdQ8eqgzOktiLjk41tCHcIl8n2KXQwVPc/6P8BnTq3eWgHDLsurw2UaKQ+fETzH/ILTLoAeYyFsaorpsx2RaDRaFKSPKDREvYjYfP5/zgP7BoB0zzp2esti01F7HIUgLQJbiULFbZTqrtPEKiHwoBvPTVS0ymGip5jLjeJzr/gNvju7SxAZOlZJzJ+6HSLeWawHH5Aw3LssRkIKE6wtnJTuf1y3IWQIHpXr//KbeX4tOcS5hIqk9Lr8i3ZElLWCeV2jJp8Lg/hxYXkiIC4uXCKZ0pZ1xOg4n6WYtyU9BMtu9t0dRqbxhnL20EwOBV1ShVFjSf6nM8AawqjB8/GfeqJUUPw6P3d5Hfmfeq1Ma8LyyNK7Tpnn8+oa/awCs7OVC7fLqxF/P3FHnI4mEPN4Tcjbq8VWE0BIcG91LqRHe1EGcHTy5uQ42puxSr7YWbFiiUq12hJX/tQ+zNEaodX1b5znD4F1+5aJKvIANlwKf+8BVqwaWxpZLYwLkCz2L5MPejdRaQmHJRAkutpcz9ud2FvWWWUl6Yd7Way9WCvSh0nYtv2Uzv0BEYtR6sg1yMT/yOdsopqGsWGjV5ymzwtmxv6iRJpogH/ZA/tuFH+ID1/hum4iHre9dgk1qPG9OJG8g+DMmwzTNeas+O2YFOfohZOtosXmcUPKoMbRFq5wpV8nG4cdg0p4fbS+Kvv/ttCOknAt8VI/dhPfyRrh7oiCd+e0Zmo4pRKLXJjLg/j8Axld/MEpz5jMWVzveMr9eqvAMSG+VF0t30SE/QXPnI5Chwwh8PBSOhs0fsX24wGfJDkWUSXHPJTXpc9QBzjgPv+1j99bsL3d9w3gMvQPvnuYhxlARjSW4/HKGmiUwO1g3lgjqZKf2lQ4jRjVOOyn9Q0Xh8m33g/tasrBhbiPxsMva1c6/37uM1LthNkoA6XlOlY1nMPM0fxqSiTqU/XPowLeKgyXdhZcpbeNgLWMfObm1VAKlH7eJ4Ae+ydKU2ATF5FdLSRTp/56hrIfYX/+f/+kn2TtYBNlL/vgvZdIf1QolCscMJDuFAVYwjeN9b9wGm2K/wMX1xcJE+Zh/FUz2017S5XXNY/QVcoJ7H4b2HWfr3Ck7zZiKQGnLmDERZuae/DVW73QXalzjSb1S3ohUutgIjYAAP74mo+yFNNMWDyHR2dx4/KN+xmenPAH98PBG//jsfCnd49+29SuiO8o43sVRyvMyI7Z7aDw14ejrRBnAq92n1Lrz9ZoaMlfnh2/jbBETZI3gMNXCJojF7c69NnHUpO5MRwLXZW2NJaBDGVCCFEuKJN17TjNPFSXwIRZH4vtCmD64aEzYNQhvNSRjHxGtjRHlS4EQBStH83DyAy6X73jo58xDaAppTur9yuOvJJBZFWiNruTKunmzLlC1666wJKZzxcQZz2cd89CJXwvA9hrEn0/TM2Ll1cuZn5A9rnM7J/HxLy31aX3ddV4Oj4bJD1Xf4GPNkgK4YjFnUjzVL77MqqbFGm8Y5x0DPmVsrWn8jExXzW9/gz9Zhxm6JzO99vLsevUk7/ygTmn3+mRv2vUlpfSDgzsGLIYAmJM7PmpBzwpNj9w19eZyLKgQ5Tj8aZEO1wDhz8eDQqfSJNVTnxetw3q19QO9GysPLUPZ/WoH7ZtgtMOurnnQwB/9bjGNp1J9FiIBUeUjtdJL7Qg1qgUEq0Slm5gOQBrqF9nU65AHUZ7hX4eWz6M14vSu05AYI3MugcIkUKUlpBf4ykAxlR/798ttct72WGaOsQMftSMYIR4J+Dt3B1PtjPESU6bsDLS0LcgTn3miQ+vd5uMN5wsLb0J5AQeMZXV6gpVLp3dWKbxVq3OxkAJnr/W6DU/Kx+7D6qAfytvpy6SGc+Hp03qsZG9oHo6BIwiP24kVuAZQ9VD1/eNt2J3MnJ45YE8gbmpSWWsh0U4ptXMUlTTVgmnz6A+4nBfyPxL5lfjk14KqzWonEnD+PUWcFr5FszRG7TARhJQp91W0ODUN01ExaAJ8Ki3mbFXBq0UcpcFs2wXOI KrWPSl9so3Wd0ozTclEq7cCGpq3rrOUe2Z0c51e+KTcO3q2C160HBndettfFFgOlvqfgzYtdLdSBX+ZKDS6Sy45cbzROzoMsSjcqnWRDcRzbmn8/wGqiumbwt80Xpw3o8ZufCKjrod0CFEZnV0RO6w0WjkhB+AVm4ZWHPv9vC1E+zxa/k6V2sbIfej78GEEMuL6H6s+l9nlF7bhrqvzETdkPqFkVEKsP7cfG7H2OozfMy63dzjZwOh/9yMxTq+c72AOpSGKSawxWolHTmBcqGEwuicwyaSptkt8svIaao9Sqn0u+jxKZYrxN8T+56hgRonTMCuEHMLltGJqFdmaPotOesONC/bo4glp9m1qIFdul37udirnmmt5Uz6sjWgza5xSNlLTZ0aJ7domPVGIUwPjH+hgCLWHJ6Ud/HBXwKAC7AucYas/TPmhKdw/nDxPhuvDmzKNRZXr6Rii/kIsDmXqxpNG2YTKItLeSlJ7WkoHAZMcRHcG0R7oHP2CuSwb2QXbRGVKfVKotHVr18aHuQV5ewooQtnGbBj8Ukp3kqen0B+lV9ZyTb5/LTzb3HMDi56m8VIK3lzjoG9nb71kumtbTWkbEjV+eBERaeLOAHfJj77h3xhK7WTy1DHWVaNY/cZx+XCmsFtehhJuun+5eZexOh+kEYGEyuJFZLfMusoj1OXz8yqLYhyaoSlbUXsJ7MYWiB54lswjiHEh5BRYZB3ofFe7MkCwPQ8B45JDJC9nOfqgLEYQRWzEVLmbteZn/lVQTLH1v3RmQHHzTbXZmE0+kfgasV58rYtK+rhl/swnR486TGlRZCF0LryJY7MjnGsPjUXDyuI8D3NrNqh3QzUhHpbPvePU/kPJ1Ii7Uw7ZvVVSRNT56MW7acytQyc4KYgMPVCubZsUOjwakrv72PoAz4kFZK6B3rhhVad9qvtL7xvIaHauY9I/bfwyAEWqI4V3dmk5aH9Y1vcct/i6oYaVyatl+WbtZj8NRyfK0IqDDQ/mMqm3y0zRcXmYaK5d+2LM+McaYM8gmgEZ5FOKERsHE5ch4xN+ADNUpR3FBUbE2uLSBWPHl6y7bHb+4JXR0IcE5S0yLRvy2wkfLmj6CXSMfK7gQupLGYmjA6+aT5WorI9IW74HaSZDeBpFRrC94XHlQuxtKzQH/NXWBnE0rK78RLD6MUGhMe8Nr6fcu18RudRlNNnEEMBH6JvOoa6urQH17FSpWTjf95uoBRE+39DmkF0ZWspcEnv2j5o2MQ6sb6IuSQSDL8v+eF92dxOHPkZTK3Sr5F/ab5aTJ0kG4xnXNp+xiF/KsCbqgCctZtI920PCe4TFv/ZXb/ChZcpnoCtaZSC/zZlMD7ExOCmpg3RP4zeUpgURiPogzmg/GEZImTE0+O6mKGgWLOtdlWhyEy1jwqVI0DhHkV5Bi9krholT1rkGLGbmtDB0de9Ak8Cl9BQCNalZcPATkD8q9RRYq8Xum/mT6i22Z1FTENj+LTnkaxcol8hIj4WHaASnhxUY2mEvVLC4bFuFFlxbbYNU/l+F56a+MPq6eLsxlyyG7ngGkVlME3Kl8HJNr7iz7O+YQJgE0/JW3pzfY8mq3U5ULCQhpZdRX0tsboiwRgDAKhzJftTA8UMtcxguoikOdcy3fNMt4w0PSWvTCDRp3eiI3kakNIlyFxxIHz3Fd0Ep3hi6DfWFM1SBE0ErFhk5/OlV/C4FdXLLeHGpe5IAM13XbDSxHLr122BfxWS2EEgjHFxnS5V+dO2sQzGjHCsl2MblId/pO9M5zoZRmzeAPYlEb3l7V2649iP5z1jLT0Na9lwOtdLk0aNO5wVu7zx7gb3iWnaSSGYbHnKp1YO6sqr5GJN2hV+fa3naEeMLTspeyqIdg98+sauDtdHiYKNLr0kHS+kC4JhCfa3GjyvKhK/B8LjztvVN7J1B0KsP94bDK0UXoplz0mCdXmh4Iv5En4o/qiBzHAZrSJws8zwTmnhDS8CQLmW6G9Z3IvVl08o3e0N71BMCQoWz3bkaLiPh6qTnayxvPmzFGXHfCDhLSkNtfhODhZh8xAfzpdbl20eimNwJ5/SZwevrl6+jVWlnCKwtOEFgieyqgQSrttHkZZfeSBdNkXzFtjH6Cy33jIyzk/f1wkeoQFNfk7x4CoaA1Hq0Im39fa+1V/E4FP774ugSzmaNfUl2Ady4Pq3seWnin1dJAIVHWUrtF7yJMUJFPQH9OPmJ2SQGQ6Bjw0LEggKQ7uhZhO0RPR5rAlKNLBrkljn8Q+/RB+dHmWvm8/htChyWmd9g+J+vpa3cC3nKqtCIo96b+p7hIsLBxILc2cBMwai14xpvU06Ha/nq6Zj2n0ReQQiTPH8/L5drBn7hLKez0LYxvHi7R0/O+wwLVwe2Nj6uYmuRRGwBCbxppE/Wc05pU0PBpM/85T6PvgPG3Tbv+u0DWdZMZhYJywoVlm8FQbDqohelA39f/wHOVCqGhCFeSn8iCktqpk0uEtHp61jtzgl8zyT8G0vEIJrkGEH6PLs8g6gRhB1KECJp3qDVjVoKUokBDvi7YcHQX2gfgDDiYtTno+xHZ0KUuM/QhqnM8qTImQQJHz0vm6R1GXhmY7VLrpIFcXdj17UG/4OynyXRpYWOtGvCCT2KVoUKXWv5QsT0FLHDyuZU0veY5cGujvM55AiJhzsKgXbG9Ipn3TPkMKxbbRxPZOpHawXLmtZQR3vIaucfs2p+0295tNmN9w31Y98VSMVJA68LHVHHn6zYN7F82WoMzn3cFYe3w+54r7tIwF2aVDajRHdKK1MC4qVKohSvwnFRWcuUxhQ5NgqrkzINSOZwkBqjabFMohlwRu/pusi4S0mDV4tBboleshRPFoW5nO6fWF2O0qrjcvBXdhdx4G3rzMPL/xW5NEykj4bxfxTAVqHIRuvcQvgzcUuVi47CNpmUt1OeHEM5Hjm2+ivKJgAAA==" },
            { id: 5, name: "Product Launch Decor 5", price: "$180", image: "https://th.bing.com/th/id/OIP.s7o86qHO2j5TH7BrqlBjOgHaFq?w=204&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 6, name: "Product Launch Decor 6", price: "$220", image: "https://th.bing.com/th/id/OIP.lEDaqpCHfP_pD2YzkJNxrwHaEK?w=329&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]

    },
    {
        id: 302,
        title: "Office Anniversary",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600",
        products: [
            { id: 1, name: "Reception Decor", price: "$200", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600" },
            { id: 2, name: "Office Anniversary Decor 4", price: "$280", image: "https://th.bing.com/th/id/OIP.ajBFJXc9g5g-pDChnOOt3gHaE8?w=278&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 3, name: "Office Anniversary Decor 5", price: "$220", image: "https://th.bing.com/th/id/OIP.XljaptnTxqerj_bR-NB5PgHaFm?w=203&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 4, name: "Office Anniversary Decor 6", price: "$260", image: "https://th.bing.com/th/id/OIP.SHsPzHD75uRUlXaNM9KOhwHaE8?w=275&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 5, name: "Office Anniversary Decor 7", price: "$310", image: "https://th.bing.com/th/id/OIP.a8lNIKlsjWeK3finUqxqpgHaFm?w=222&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]
    },
    {
        id: 303,
        title: "Conference Setup",
        image: "https://i.pinimg.com/originals/32/a9/4f/32a94f9f0163c8a0be42daa7f5573f8a.png",
        products: [
            { id: 1, name: "Conference Venue Setup 1", price: "$350", image: "https://th.bing.com/th/id/OIP.ajBFJXc9g5g-pDChnOOt3gHaE8?w=278&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 2, name: "Conference Venue Setup 2", price: "$380", image: "https://th.bing.com/th/id/OIP.XljaptnTxqerj_bR-NB5PgHaFm?w=203&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 3, name: "Conference Venue Setup 3", price: "$420", image: "https://th.bing.com/th/id/OIP.SHsPzHD75uRUlXaNM9KOhwHaE8?w=275&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 4, name: "Conference Venue Setup 4", price: "$390", image: "https://th.bing.com/th/id/OIP.a8lNIKlsjWeK3finUqxqpgHaFm?w=222&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 5, name: "Conference Venue Setup 5", price: "$360", image: "https://th.bing.com/th/id/OIP.lW3KXSGsRIe2Ff75x4C9HAHaEK?w=288&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 6, name: "Conference Venue Setup 6", price: "$410", image: "https://th.bing.com/th/id/OIP.j94mKKymWE1UenXvKBx2vAHaFj?w=239&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 7, name: "Conference Venue Setup 7", price: "$440", image: "https://th.bing.com/th/id/OIP.LnU7wYrhXfsUY3CnrNSIiQHaGN?w=201&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]
    }
];

export const kidsActivities = [
    {
        id: 402,
        title: "Bouncing Castle",
        image: bouncingCastle,
        price: 5999,
        originalPrice: 7499,
        discountPercentage: 20,
        rating: 4.8,
        reviewCount: 156,
        description: "A fun and safe bouncing castle for kids. Perfect for outdoor parties!"
    },
    {
        id: 403,
        title: "Bouncing Castle 2",
        image: "https://tse3.mm.bing.net/th/id/OIP.dhpxc85wfE564Lr7mZK5jgHaD5?w=1024&h=538&rs=1&pid=ImgDetMain&o=7&rm=3",
        price: 5999,
        originalPrice: 7499,
        discountPercentage: 20,
        rating: 4.7,
        reviewCount: 92,
        description: "A larger premium bouncing castle with interactive sections."
    },
    {
        id: 404,
        title: "Kids Car Wash Activity",
        image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/5/29/0/Original_Jalynn-Baker_Kids-Car-Wash_Beauty-2_H.jpg.rend.hgtvcom.791.527.85.suffix/1527602523259.webp",
        price: 5999,
        originalPrice: 7499,
        discountPercentage: 20
    },
    {
        id: 405,
        title: "Adventure Play Activity",
        image: "https://th.bing.com/th/id/OIP.YqjgHKWERzqeOs-eC5RUDgHaE7?w=279&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        price: 5999,
        originalPrice: 7499,
        discountPercentage: 20
    },
    {
        id: 406,
        title: "Hand Painting Activity",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
        price: 5999,
        originalPrice: 7499,
        discountPercentage: 20
    },
    {
        id: 407,
        title: "Ball Parachute Activity",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800",
        price: 5999,
        originalPrice: 7499,
        discountPercentage: 20
    }
];





export const candlelightDinners = [
    {
        id: 501,
        title: "Poolside Dinner",
        image: "https://image.shutterstock.com/image-photo/wedding-ceremony-decoration-260nw-484560862.jpg",
        products: [
            { id: 1, name: "Poolside Dinner Decor 1", price: "$299", image: "https://image.shutterstock.com/image-photo/wedding-ceremony-decoration-260nw-484560862.jpg" },
            { id: 2, name: "Poolside Dinner Decor 2", price: "$325", image: "https://image.shutterstock.com/image-photo/beautiful-wedding-flower-bucket-decoration-260nw-475241599.jpg" },
            { id: 3, name: "Poolside Dinner Decor 3", price: "$280", image: "https://image.shutterstock.com/image-photo/decorated-wedding-table-near-swimming-260nw-475241611.jpg" },
            { id: 4, name: "Poolside Dinner Decor 4", price: "$350", image: "https://i.pinimg.com/474x/2b/ed/b5/2bedb5febbce4894677d9bcbb0a3ddb1.jpg" },
            { id: 5, name: "Poolside Dinner Decor 5", price: "$299", image: "https://www.weddingforward.com/wp-content/uploads/2016/03/wedding-pool-party-decoration-featured1.jpg" },
            { id: 7, name: "Poolside Dinner Decor 7", price: "$310", image: "https://th.bing.com/th/id/OIP.HaAilib_OnFQVJLp5t_RhgHaEK?w=320&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 8, name: "Poolside Dinner Decor 8", price: "$299", image: "https://th.bing.com/th/id/OIP.DSeg-30eG8hNfn4jstCcRwHaHa?w=191&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 9, name: "Poolside Dinner Decor 9", price: "$325", image: "https://th.bing.com/th/id/OIP.md889vUFvkStdmkou6rqHAHaIu?w=166&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 10, name: "Poolside Dinner Decor 10", price: "$350", image: "https://th.bing.com/th/id/OIP.3c73Buvk8bicomptRTjKEAAAAA?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]
    },
    {
        id: 503,
        title: "Private Room Dinner",
        image: "https://th.bing.com/th/id/OIP.HqL_gIuMb8Cmaj5Gp1V9RAHaFj?w=242&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        products: [
            { id: 1, name: "Private Room Dinner Decor 1", price: "$180", image: "https://th.bing.com/th/id/OIP.HqL_gIuMb8Cmaj5Gp1V9RAHaFj?w=242&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 2, name: "Private Room Dinner Decor 2", price: "$199", image: "https://th.bing.com/th/id/OIP.Hr-b24aYRcqAxkDQTB9oqAHaEo?w=261&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 3, name: "Private Room Dinner Decor 3", price: "$220", image: "https://th.bing.com/th/id/OIP.WG457HNQU7BczlUJ1pumJQHaFF?w=264&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 4, name: "Private Room Dinner Decor 4", price: "$250", image: "https://th.bing.com/th/id/OIP.v5ngF3l5fgqbkZayH3wD5QHaEM?w=293&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 5, name: "Private Room Dinner Decor 5", price: "$280", image: "https://th.bing.com/th/id/OIP.38ekpf0qo327uTfatL3IUwHaE8?w=211&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 6, name: "Private Room Dinner Decor 6", price: "$150", image: "https://www.peninsula.com/-/media/images/tokyo/new/dining/peter/general/the-nest-evening-(1).jpg" },
            { id: 7, name: "Private Room Dinner Decor 7", price: "$210", image: "https://tse2.mm.bing.net/th/id/OIP.OvTNwS-MJAwQBTdFzn4jXAHaLG?pid=ImgDet&w=187&h=280&c=7&dpr=1.3&o=7&rm=3" },
            { id: 8, name: "Private Room Dinner Decor 8", price: "$190", image: "https://tse3.mm.bing.net/th/id/OIP.RwpoUOK6ieVZBttGYR2UAQHaGL?pid=ImgDet&w=187&h=155&c=7&dpr=1.3&o=7&rm=3" },
            { id: 9, name: "Private Room Dinner Decor 9", price: "$230", image: "data:image/webp;base64,UklGRk4gAABXRUJQVlA4IEIgAADwqACdASpZAeoAPp1GnUulo6KspPabgZATiWdtlGTX5o8St1IRokQjiFASdx2dCwc8v5z2F2atvftx/afERfR8uPQawE8JOP3/x+Ph+D/7nTH9939q9RXpd/u6TkeDyVkjzYPnZRQGgoyj0IN0qq3oN2lWQf/Ye/WZ6PT8NwlNlR3AlcQi3vyYa7HXweh52st/8BLEL7e6TWbmRImCjmd4MZDGhaB/q5YLyAvjOW0NOyzMHx3JjrJBVar8ohQNS4GruZkdqHq6AHSDkwTrThPeB27xwQYWGBkAoSMlHeSy+Sv+I9YpXef7dfmB4ET5A0dSlk2RjQaajAX0Fpaa54on3RNgQzoNPVoLLdOAi0cFxNyNXK0M9IrHa5ur5BaaCoqVeSX+7HQWpayKyUaB82cEO2zdXF7LP0htflRFVCHnVsmp6irzGKoRAwHwoTHX5upcni/upeWmlnfcCEcRSGpYv4/Vyy0QYE8zJUxGHKlWtZuAC4bO+8mSS0Y5ahmqVlrorusiJA/ZlN7n6gFbnrax/cxQDuSqPdYR8lzSjhtiRU8Ww8g+1xPLKm5DvhjoONSgxWUeFMFvSMgUGKmnT+SZQorpAnk9E7O4RbQQFX4Z92AhDy06dwrEp/o4/+Stq/t23PHUTT0Ht0XMAcxCNBgHOZOe4O5WyKAexqy/hN4BARy750naIzu0cQ9SGyxgWvJntM3csSnI/zcbMEl2sr6wcYCf2oOGWCmTeQTY9kt6wHUXy3zbCcEHRdtV1RUMZx+obO1uhfB3LcMSkF2H1RzoJJAvGu52zhoPtw7AJGqOHwyhsrwr7OMSxhRIZjr+WmhBbG+34nWjEzZEl40FLKiApUWwJhK/Ui4ErShdkcJkk5KRqEWlZy89dGrurjOiJvPqsitlIOg5N5TzBi8xJFZKRPx+pWfyLEsIZt2t5F0D/RO3YLylMCppSiEzJ9rAdk8mjq/Iv3M4Ce24QIDL3XIy3gfDI6Z7gTNPZiaz18QsV2qekiTeViHwewIzjamGG0SjsIZZntGf+e3ZjfVYCHSaWnvq+5PT+7VJ6VxN9rUyYl+Np03JS2hH2969dozcDlliJjCgcOfr1s37wWHPOgzb77GnS+gBlDopkXyMl2KcGTuT6vTOXPI4k4s3f5CEf+G1vLyaLn0BSS9QXaNMZTEkgd5OY5zDl9E896Hp/8r0KmjSuxfTg+2Ju0WBt6bbFrPlbGEoBc0Av+Q//TutaDt9sNXTcgsf+d3cppiJ601LjB1pDC64QkmNAHBPapsEf7uclts+Vo2ObYL7muHZrrUG4sI+3POd7IK0q2xhxcgKuuL7MC35K30LtJ6HKYruU/YNTKXpqsxbvsn273os9ElZKcsXlahgahx7OYUoJuLH47E0b1nU/y8evNfNniKcoWnDzfolgjRWX23Sj9cTjxG+U1WLWEWkONpUds4haMbdVPBJN46MvfSGYRX7CobkEbou16kqIkZgoqnN3lv3i3KMvJIz0IxLxd1BAilP/j3Xgr/C4oFqD3QLSm8g2WXWKvGUf+IEQEJgdEuhM7W/n601pR1lRnpJFtOLkfJ89F0Y4lOi6/rY1WtBBrE86HVg+CfL4Q6037cCF2cVIqsV8POY6L3fFrS0yLrO3eCGfSjvU/qvqN5EQRfifqmHZ4vDAXePg+KvutGaGkAXeF3t0ie/ugwNLPrEZzpmbVSHrDqhj5iP9sTkuG3O6zupmdqykq0ZcjAk09Lbzxdds+J3d+O70equ8npzuf/TjsrKkh0NrXPDwVEszG+8VcuADcwHAPRFrAEMNprdxgHkOxmmS94AAP7u6V+1hE6tto7vcsUqvq0mkzTSibRK6D85XkflNvW8NyEteR4X4hWd/jgcwVThXU6Ty426BhsatJczCp2F3jqAllHTAa9Btm0iTDHjIRHSn0oiNVvh7OYOPa1xhNtIBgqfo/E2HQKYAiR7fkj4YoxyKPAby4+3aQelf8f+Cmspkw/jPnNYLPXuKIwUitc8Qx2GlPJNcdO/8bXCh/J/OsQjdW9QC6IJFs75zZA9rD8/V4E7hPVkKiB1XevbcGBkPlM3bwr98mZxhU9Cq7lUchOF1FXNTTNFtBl5w1G8m2oLSABRp5xQbiss4/7YEfzE8KaRlKuRSznAz/vzFc1pWNOTm+RFL01+fzqfluIFx38NTU64vliWPwmhzYT1INpiumWW7dkSTbjb4sXQGcMDMD11aEdaPMBQUVEELDirDdOvmgdyfIoafxVCUebF2j6az+n8W5qgX1ZPSBEknttVjN7RcggIl86YGsovJHLg0cveW1o2+GpDxQwXJf3AYZzOJPBgWOu8aHKGE51jwB+CvDavzXNwMDdHaRVNMtiYel+0hYrjCOriEcXz/2sGY+vu58ON4CIxnNINYRkxdIKbLrBfbOMDZdTtFLU/QMLzKar8TgAFAiWSU99DVJokVP7WZEu1ljmZC/C6Dre6vbUvjZZXtMz2gDOk9JOHjlfaSAf7uyDpbDjbuNNkwRDLdVcZoUJitfT8mFsh7n6rQ6buiVvdK8btP3scV6q1BTkl9gDxecRaXgvUg6sJA0pSIcMJbpghTmbX2SRAuFnxRBO2clk/mJ8vyQaPni9t6aw77ju7c/xOuZO8ZzziKVA3n+PJhewLlgsENsZE2lqhcEDXky+rMnbxKvqbGJVTg3e0tTjAOYH1x+hNmd1ft5FThP/pP9lacfM/ZPQzqEK7N1s1qClRsjYA2cSvepIPizA7pytbXycdT+FM/8WuNiPRIK4e0MM4V/5OBamHtgAmCGt2UzuLxcTJsT7Rr/8s+2Jib13xWVb0UUiGmGIW3dMi6308PQpgD3zfbuQPFYC3cEV9ZtpeLU+xtjb+u8v3vpRub0AnJqlkunwCSL2GFX+d/wNWPCdQaozCv0WUCCKhMYw+r5aBkCQLiMVQZK2kY0WkNlA2aLuylFv4s/iSSNwT5RxBaCTFwiZT3PfGp2A/smW4YTNP1Hzmcr2VE4iZ0KaZBxzGYTwYqbGg4eqPSGZg+6uPH6RQSOWpmPCZz2aoOap+QOjU3PAzELpX1wC87k1gwrANN4onA4tRhO+HxNUpjo7MYQB4b0qFfcDu52klqs1TIw3id2Do6mH/4eSGZBi6NSnEVi5gecxHL9ne+XR6quxjcebwXxmYVoKTIZUrO9Wwic+WmNhI94cY1/s5m2PqUfk7pPRNvSmfTDzHtmPhFPus2dqKAiudKcmx0JLQwlbk4DTL/a7hU2gcacal1rVGS2y49qse5aeRONu5BDTCqrihZQyZ53ntzohbBNaJqL2sT8CWTcPLyYhJ7GZnNYIDcdk3jIoDFFqulq3J0KL7UURO8NxaThJCBwKC6TmOKmVC/t8YHpFqeVGVXU7dlhlmA7eufbAAgndpjkuHl71yePL9I+xNYvNx7PGXQgTXR62d+iue3IURtGvtQTge/M578CXGusPw4HtgIhlqtUwCchCZfbIA7ppuy6IGExIpuMaU17yRmmSEHnpWENKQGDIFop7sBBQXsLrERTCzrvPMItiD4SMeo+O8Jsw0dVqw2eZY8HXvqDClcDY3bYlaWgtpE3qXpXe0TalAIgDCnXZxH2ztaiJxo0mBcDjt8l9zci7kJ5Ay19EVH5Yol5ebItzTuEqujkQzKV4+BQu+AxZqtlQQdDYY2kFYQKgiCtgKYiM0PoLzpZl5IJ0B7TP+aljlo97XqPhxXsFl1gxW+lE0kgSp9LoRjyyiHlxT5O7QWepY62N06uv+vAoMgtghqKZIdWFRNlfmUTXqM6xyQjLlNO9m2eOicEggV3Kr/s+guOxdkhxuMwnn0JvKr1BXJ0PJGLJVIlF06rW81sRwRZVHLDhpNYkhtWQVa4LOcqrFFluAaSDE/K7vY06aFdOZ15cL+ElWaK43SoaqODr82SsIw38I0AQkSakWrL2xuaU77QpSAh08WrDzBZeR+13/PahHCU65UPef8ovOVEVn7r5UvAmCa5euwx2q0GUU+dt4LiH6Raxn+wJ9BPcgZMkBq0PbM1BGKfu8rHOtuJUV2Oa0ZeoassaaLyFIxwnpcztO1ag1/BOZ8C6zbNmSre8auvZGkG9lYgIoobJhz3cilsFMbEzXXKev3Rlfa4wqh1VLJfWXR6f2PN/GMJi6H4cEshOc0pRc7hJOskuPARt/y9S9vtIpJ4t3BXM+i+AuN4A1+2YONf7GmFD+IiewX4trBJiYXV0PIGr1apryV3pW4jl/8cQF23ziIPbRkV2BoPBvOTtPFEecfOMDSHZ8LZ510iH2Dpdxu29StKjMFwjDS1TgEagOc4JIUzoaGlZDITRetgvZWCSZu8CBp8RK7SBxnt275UMzpaFoem9O7YCwS7zr6+CDvIY9ue32cCjOm3vYolqiwHbsL3RQ0kLAqAki6H6Ivf0BNgAd7XXVh8khRmE461EjLnAhyDcThExgLf79I18RoK5QpgNEikkJsG+3i+a/lAI6GmPANybZSj8I3vy250gp7n+rSsJ1NMn2tqCTPz/I2QmlKSnPqUFHbTM3PboYL78FxZBIvtjULEd+gYZ8NAkBE6xEILBwInwmiJYD/WP+H7TO0LikYGSsMli8CtAIu/x8JlZtCpO12zJOn3YkWuDi89g9HFaTXBcPIKVbBkw5UQYcbhx6Kdk8KZKiEMdztZJ6J5j690QYSQyy6NLVm7LvJiFh3snlq8Y+rC9Kqr4KOwCZKGianZvOMRAeb4rxrnQJhwTMPLI+pxCYjLRoY4IWvRNujy6WBefUi9+jVq7UohufLggAH5veFtB6XAY5YLITVrXstBVYBS8LO/n3OnjIY8/MN1CnLjvfZst/+w1ET9yjmNhYVx4a5b7P6oqmQ7GcjpIHBwPhMnLKAcjaFrtWxh42VWGTsWmGzOi5af2qvme29NL96vJC8rj8mDo/FJKI61Eq0FbwSWWhrVXpqWqNLxeeo4LuoERjP7U7Hs2sEIVSKa98dCdXcLKaqcCK3FWMRfsQJmi8/w0vjMKyfm+riT966PWy94CT62ARN8kCiYBvPKZkLZbFs9yYD57dPvhSLMBw1IyG44ZPx8YcyyiOlB8QtNS9w/KVLkhUBOlzBzBxTurpqVZb8AWgNUblrer5cL0Z+toLm09U/CXB05GyDBa/k8Ods2IZDptTV1znS4ux6HP2H0FwvPhJUvjigIDLErBHy9nvjyDYOE/9aRTdZLzLniqStuxkVLVRHBINDkpixZetSGHzX5NjebWHe7KLGHAyp+O0JfRCgjqFOi3EYVXgLUsWxtfxR5RLN7KUwLQhyqGAAx0Sdon9LNHdsAbkSFVUIx5KXSTgnAmbtmqjKkINGuQi/wOw6UcvkI3LMBFsXjEIzK12L+bQIGWjDfszSLF5eEiAaMdTrHGjalj9yocRHOOU2ZtAJCp5Swp6ro9Br83sQCopzwTPBsQehwLQoNNzmaFgS+bfRXeNgBCMP6cAyM0TxAE62Qj6dM5fchI4eci5Y/lytyqRs/hIbIgnk5aG+7Zc4ZXaieh41RrMkZRmja77BVbaShwHiJrgQytcSuQhOkMBt+tnTGLkeTuQ8GGIt6SVeGEg6eGqUG84PhirJU+GN9RlfSBN3Imigoexzem/HIfUm6G86UgMK3989bxCyoe3RjMegjjuTUbxtGMDExCmsWTri49pyil35GdyM1n/O53c8VWHBkPL3XlJzM2Mxu9uiU+X++bZGJJzO59t1GEmbpMIwurHanFm8qWX762M7qS26/nv2OsvBQlTdL9JygG00ErlzPv0rBWaotu9LbWdr33mjYPvoklkWVvLdsHh9sewoRdwDHZfxFeXzHNPi0cII89oOcoEygSYICxhKocQ022/+Vf3c4dsC54VTpa4vdcdKFGFQq00bcnOZD5M+/0opZ1OscF1eJN138GNE1VINEhxTldfIPrjv5jiTMBLFjV0hFmsO3qwMxPpRQokO7OxKkuHfBLFaWKDmWbFhdXBKGOoRefnNPeqbJ0lZqLgdtdS5t2DWOMramWzRvC5f+I+o7dQWgTnIeXf5YliRPM+Gsk4yNgAUl/kgxVd5sHbwHIEbEBwOfWaxKM0OYyT/Yz4IfiUAcivh+SKUp5ESojTLWoQmbZXpkEiihu+/nq5vbHwE2E4jWFZMOqXrIirVFuMONsx8CeUqMLIGHeDqYlqbe+wE+J1C53tYCMPAA8aWnM1e2dqgY/jsUikbk8UOuI9x4BgWVn/7U8PS/GjpLgy0UX9W3YvVtf/hA6sRKiTxGOGCsWlce8nJlg1Bvj3e/T0ipoF1Lhx6GsJ9eBooo97R2vFu3ifu/UI1yZ27iCZrpwpijIsAKnt1MFh7Df1jKF5Phcb8pZ+pMmstbzMIo/xpQd2q5ZOUgNNiyDNw5rgRjiMRwOvmHOqJUmGR+tNImBs164cb5rm2BOolOq9IReyom6241zCHiY1alUxVWpW00wdhNxLNAuZT9OPQeZLbXuWAX9iMdXowPzVMDJFo8uLngvr+8+vC74Cssv9rNr1KYeL/H+rOUT85CsgHDyGOgSBe36d7r7W40DCFuu/47TB9ubbHMq/7HDxwH3Ftr0S5WYxnsDWHqy+IvjJfazo3Ly9NNAaKyP0dZ0E6QT3INCjb8pABwNrPjoJINSbuKO6GQBqPEPp1GvQ+qafzIMMSzb4YRf5zT5G5zyTeJVgVO6CIY90ylYXtkoI1BSAZYRXEi2UbA6ihaNyZsdRqGiXp6aTPGKViefCjNJYQQEP1LTFEyObeByOpkyCF3FeGen+eZC8w1lRb2HOFttMi+DvKdvm82lj+hd9eS3SGS8LYMJCCPWzd+IAWkocZlb1P2lktnnBHtCBtb9VjKxyqiWfGsDtBxrGDviAeg5gYsnD6ItImsOiz8q1+l4jlfBjFEugBCZyEzovq5QeYUteeyusAa/1ENTxB1AXe72Plgwi749F/UPmZhl7X71EVbTlK8s/5p/d+af2nBISVt2LiEwnh3ZIh1pHwNUs0Xs/Ar2qhwNx/xS4dgnYkrjF+c4q3SrWiD34X4OvcWhLN8t2v+NgYQJgntikVaVTWv8fvwf1CKfwl3n2iPPWD+V6lvDYt/GLfikrS++qi+H0F986oCzCunoFT7DEJuNib57IbK11EAcr2XmZ7GfLIniimUVko7IWiMtKTTxqLUSQr/Gc0W97kmWdeRr8xITLPKCYINPXu6whb0HpGgiYfKVyn6mzti+ZTnX6P54Ox9XVR/s3U73PG1adzy0BNE9er6WxKlwK3HqRE29f5G/7v5kTqI3oy6o1LywEoap3koTl0BHrq/pjjVs9UjZVI2lyWM1sq+7F63uggUENdmlns2RCo5LJ65AFiw5qrk2xYPNw8U8BvPAjQuWqLY4BK0LTGR8ZNp3zd+cztp4TMsOwhhyXfcePV12V8TGJLjrikgET45+ecQCx5sVJkclSudDgmZtMdTkhIHAAmnjmE9TiNZjU1hmJNSl2WNzsV66T8mOqEerbPObkTINAtfFokZhuNQf3lo7n2sZIM+5HIG1gIb583DG8II67VOwhm0uV+0W7r/8LEhcpgcE4rhOXUJa+WnMrt7cfhToU+phV8g4nFTYInDIGRUwA0Adt5f/WqTi47aGQeQyy3D8irG5ercX3FGmI8qDy+5wXeBbmKd8xWXFqmr08ngLRgCxfGtIOZwwrmVc4IjRQukRfWkFH+fgw9qFtqin3qM9VDqtW0Kb4K7+SMemji0gG8F1SVg6i4pmhBWcxrhnOHaUEKcN783MPe65VHvmB9cxcVHOIfgQuyD+dGCGNx800CT/v+Vx6p2kFPlTDg6bV9sLrlNx0zZlfYA3qHcx3DmougFZ0LaQOBsaQfE6qaAnRcPK5GWzlVKy5ogO3eUws/CZR3AQVFiTN1XFH15f+PERkYmstNe+VEoTu58csbbXesAP4EcNp7o2Ar/VVAAMyMrUwbXI84WrV6iAOfgPrDzJzHChVfjbZz4FmS1sw11+otPPIl/9qgGzPS4ZSza55qtb9g8UC6bp5jBsZ6knrOFaQ7NIoapxEcHs/Z8laEXfmmHgkLp5hqzQ3VdfxKSv7M53bNTDZaSaZqmK7cn2OZjs7HZ5rD0bvuirxITjN61INTPPOIHEQ5pxF4ocqfbRXSvdZgiPQ6CpJOtx2KsY/eX4Llx3iUgx0LWHHE4/nVQxJ/gjdJ6jPJZHjtvgh9szi6I61jDNxnzWQZAk4C3QZt09Pv4p6O7r0EHttoNn6ztoTeMHvHRLFpdunvyvAnvJAORtiZ7SEgBodbIHmNdrXlFAQ8Q8a/I9YeZLFMXlJ7d5eQc01yQb3POaO8eHiy6jO/G1trQGVUwzokn7m6UZA1mpbtBrksNEMUn5npiJUXF/uAvdVoEyRB27aakVPKYPmZg13CCnjpVUcGB58mSbqvYZiyZ0D1TpZJtX48AXIbLqisw4NF4yxU8zF//2NmOGK62ytBbYFuvPNg0WmYdhymGCpuO+pWyADWvqCpqH9HHmf7feIc/YYlaqrn6Gk4dFVzL6iKYUCHYcVHqZRgYT6gWXxAX8JiD9HyL56ccdkHoRhQiQo6RyAulQuDi34CorqjTQYPrd1adPlOg3M75wQQmj85S69SVhw94MzRyLTX743BX7XmcUU34ZwqSrF3mXm94KdPS2NTtt+MfpnMq6VJXVsKb0KnREAa2D+Zs4dKX7xrZs9t2LVgIlIcYd1oa+x8OnFbuMbYic57T6NQ2I4ZIjikdLA82nPESIS32mEmG2N83MEME+ADP5XsfBGNdgKT5PSjnFVmpBb91RTNGMnECO+U05AWr4xlNEAR++WHP+5uv7yWIpYqXXibIT8t5uEejCt8+USkY3YSWK2JkVL40w4E2w2AbJSGS32i5EFwUHUWKYsnpt1cKYFldRo5KW8mPgg2KKiFceqXZh1qj3CpZTlAifZW1KDgXwRUGxbWfYyt2YCHWV9cqTc81em7jpPSnoGC1l9M7k5wuAlqycbY0jtotAtODlbnK/vUcqZqTZmvZymAiEPr9ZB+dbIh3TZvC3ekzYnU76raB+//IM1WS1MEzBUxYWCZwe8eretwEZ/28MP7oUTTwxCBfnujB6vYEX7h3ckBSQMRN77EiCaiySIpyMTrbUv6FEFfzVi6Z2cUcUkcW7iLrVlelUtk/LbCR8uaPoJdIx8r7gQupLGYmjA6+aT5WorI9IW74HaSZDeBpFRrC94XHlQuxtKzQH/NXWBnE0rK78RLD6MUGhMe8Nr6fcu18RudRlNNnEEMBH6JvOoa6urQH17FSpWTjf95uoBRE+39DmkF0ZWspcEnv2j5o2MQ6sb6IuSQSDL8v+eF92dxOHPkZTK3Sr5F/ab5aTJ0kG4xnXNp+xiF/KsCbqgCctZtI920PCe4TFv/ZXb/ChZcpnoCtaZSC/zZlMD7ExOCmpg3RP4zeUpgURiPogzmg/GEZImTE0+O6mKGgWLOtdlWhyEy1jwqVI0DhHkV5Bi9krholT1rkGLGbmtDB0de9Ak8Cl9BQCNalZcPATkD8q9RRYq8Xum/mT6i22Z1FTENj+LTnkaxcol8hIj4WHaASnhxUY2mEvVLC4bFuFFlxbbYNU/l+F56a+MPq6eLsxlyyG7ngGkVlME3Kl8HJNr7iz7O+YQJgE0/JW3pzfY8mq3U5ULCQhpZdRX0tsboiwRgDAKhzJftTA8UMtcxguoikOdcy3fNMt4w0PSWvTCDRp3eiI3kakNIlyFxxIHz3Fd0Ep3hi6DfWFM1SBE0ErFhk5/OlV/C4FdXLLeHGpe5IAM13XbDSxHLr122BfxWS2pEEgjHFxnS5V+dO2sQzGjHCsl2MblId/pO9M5zoZRmzeAPYlEb3l7V2649iP5z1jLT0Na9lwOtdLk0aNO5wVu7zx7gb3iWnaSSGYbHnKp1YO6sqr5GJN2hV+fa3naEeMLTspeyqIdg98+sauDtdHiYKNLr0kHS+kC4JhCfa3GjyvKhK/B8LjztvVN7J1B0KsP94bDK0UXoplz0mCdXmh4Iv5En4o/qiBzHAZrSJws8zwTmnhDS8CQLmW6G9Z3IvVl08o3e0N71BMCQoWz3bkaLiPh6qTnayxvPmzFGXHfCDhLSkNtfhODhZh8xAfzpdbl20eimNwJ5/SZwevrl6+jVWlnCKwtOEFgieyqgQSrttHkZZfeSBdNkXzFtjH6Cy33jIyzk/f1wkeoQFNfk7x4CoaA1Hq0Im39fa+1V/E4FP774ugSzmaNfUl2Ady4Pq3seWnin1dJAIVHWUrtF7yJMUJFPQH9OPmJ2SQGQ6Bjw0LEggKQ7uhZhO0RPR5rAlKNLBrkljn8Q+/RB+dHmWvm8/htChyWmd9g+J+vpa3cC3nKqtCIo96b+p7hIsLBxILc2cBMwai14xpvU06Ha/nq6Zj2n0ReQQiTPH8/L5drBn7hLKez0LYxvHi7R0/O+wwLVwe2Nj6uYmuRRGwBCbxppE/Wc05pU0PBpM/85T6PvgPG3Tbv+u0DWdZMZhYJywoVlm8FQbDqohelA39f/wHOVCqGhCFeSn8iCktqpk0uEtHp61jtzgl8zyT8G0vEIJrkGEH6PLs8g6gRhB1KECJp3qDVjVoKUokBDvi7YcHQX2gfgDDiYtTno+xHZ0KUuM/QhqnM8qTImQQJHz0vm6R1GXhmY7VLrpIFcXdj17UG/4OynyXRpYWOtGvCCT2KVoUKXWv5QsT0FLHDyuZU0veY5cGujvM55AiJhzsKgXbG9Ipn3TPkMKxbbRxPZOpHawXLmtZQR3vIaucfs2p+0295tNmN9w31Y98VSMVJA68LHVHHn6zYN7F82WoMzn3cFYe3w+54r7tIwF2aVDajRHdKK1MC4qVKohSvwnFRWcuUxhQ5NgqrkzINSOZwkBqjabFMohlwRu/pusi4S0mDV4tBboleshRPFoW5nO6fWF2O0qrjcvBXdhdx4G3rzMPL/xW5NEykj4bxfxTAVqHIRuvcQvgzcUuVi47CNpmUt1OeHEM5Hjm2+ivKJgAAA==" }
        ]
    },
    {
        id: 504,
        title: "Garden Candlelight",
        image: "https://www.bing.com/th/id/OIP.MI8WJJQxllMYJDszHBwfJQHaE7?w=274&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        products: [
            { id: 2, name: "Garden Candlelight Decor 2", price: "$250", image: "https://www.bing.com/th/id/OIP.MI8WJJQxllMYJDszHBwfJQHaE7?w=274&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
            { id: 3, name: "Garden Candlelight Decor 3", price: "$275", image: "https://www.bing.com/th/id/OIP.99sm09TQt1N_NMr9a9Z_bAHaE8?w=272&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
            { id: 4, name: "Garden Candlelight Decor 4", price: "$240", image: "https://www.bing.com/th/id/OIP.fHp96VBQCMVg-yWbEx7yLQHaE4?w=221&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
            { id: 5, name: "Garden Candlelight Decor 5", price: "$210", image: "https://www.bing.com/th/id/OIP.I6m0eYEJ-MoOHQQfaHXaeAHaHa?w=156&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
            { id: 6, name: "Garden Candlelight Decor 6", price: "$230", image: "https://th.bing.com/th/id/OIP.3k22dRFF61LegNUCV6LUPAHaHa?w=218&h=214&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 7, name: "Garden Candlelight Decor 7", price: "$299", image: "https://png.pngtree.com/thumb_back/fw800/background/20240625/pngtree-new-garden-dinner-set-up-with-lights-background-image_15923200.jpg" },
            { id: 8, name: "Garden Candlelight Decor 8", price: "$180", image: "https://tse4.mm.bing.net/th/id/OIP.rAYxg_i-JycYzb7RqBYXtAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" },
            { id: 9, name: "Garden Candlelight Decor 9", price: "$220", image: "https://tse1.mm.bing.net/th/id/OIP.7Nn3WuDfDNPS6aw1kJh76AHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3" },
            { id: 10, name: "Garden Candlelight Decor 10", price: "$215", image: "https://tse1.mm.bing.net/th/id/OIP.mHKqfb9xRs3enOYJpAeD-QHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3" }
        ]
    }
];

export const occasionsDecorations = [
    {
        id: 601,
        title: "Proposal Decor",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600",
        products: [
            { id: 1, name: "Marry Me Signage Decor", price: "$399", image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600" },
            { id: 2, name: "Rose Roadway Setup", price: "$150", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=600" },
            { id: 3, name: "Proposal Backdrop 1", price: "$280", image: "https://th.bing.com/th/id/OIP._of_kG9aLiSLb7U_nhvWigHaJQ?w=146&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 4, name: "Proposal Backdrop 2", price: "$310", image: "https://th.bing.com/th/id/OIP.2gjhC5oxmNrBzZ7snaabgwHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 5, name: "Proposal Backdrop 3", price: "$290", image: "https://th.bing.com/th/id/OIP.-JOj9X98nAjZnqwvXFZ6TgHaHN?w=203&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 6, name: "Proposal Backdrop 4", price: "$330", image: "https://th.bing.com/th/id/OIP.sWWwNUrq8fxZTZSEPdfpcwHaHa?w=198&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 7, name: "Proposal Backdrop 5", price: "$275", image: "https://th.bing.com/th/id/OIP.HR8vtXMdz7CwTT0em6ASTQHaF8?w=232&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 8, name: "Proposal Backdrop 6", price: "$350", image: "https://th.bing.com/th/id/OIP.TOketioEKo_ockWP9qbIMQHaJ4?w=148&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 9, name: "Proposal Backdrop 7", price: "$410", image: "https://th.bing.com/th/id/OIP.Lotz0HgouIIDm8fua4jZAQAAAA?w=114&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]
    },
    {
        id: 602,
        title: "Farewell Party",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
        products: [
            { id: 1, name: "Memories Wall Decor", price: "$120", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" },
            { id: 2, name: "Farewell Banner Stand", price: "$45", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600" },
            { id: 3, name: "Premium Farewell Decor 1", price: "$150", image: "https://th.bing.com/th/id/OIP.Cb1LZRA0ZYxxGthTJVTXlwHaE8?w=301&h=201&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 4, name: "Premium Farewell Decor 2", price: "$125", image: "https://th.bing.com/th/id/OIP.eKZFbuo8f7e-YDDUFH8NCwHaE8?w=234&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 5, name: "Premium Farewell Decor 3", price: "$135", image: "https://th.bing.com/th/id/OIP.k-ECgXMVzyRkIBJLWfY_pQHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 6, name: "Premium Farewell Decor 4", price: "$165", image: "https://th.bing.com/th/id/OIP.g7gSjSbET8MAd32Naks_UQHaE8?w=283&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 7, name: "Premium Farewell Decor 5", price: "$110", image: "https://th.bing.com/th/id/OIP.Hd_QyRw1HgFnjtM0qHCjzAHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]
    },
    {
        id: 604,
        title: "Engagement Decor",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
        products: [
            { id: 1, name: "Grand Stage Backdrop", price: "$450", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" },
            { id: 2, name: "Engagement Setup 1", price: "$280", image: "https://th.bing.com/th/id/OIP.Qr3dzW_8asHBfia73wiD8QHaE7?w=323&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 3, name: "Engagement Setup 2", price: "$310", image: "https://th.bing.com/th/id/OIP.Tgb23FG67l6n_l56bWyNPAHaE8?w=281&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 4, name: "Engagement Setup 3", price: "$320", image: "https://th.bing.com/th/id/OIP.jqX0O7DTVBeMF1cvp7NJBQHaE7?w=234&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 5, name: "Engagement Setup 4", price: "$290", image: "https://th.bing.com/th/id/OIP.cNt3j14vyAHQzXI14tJiSwHaEU?w=299&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 6, name: "Grand Engagement Backdrop", price: "$460", image: "https://th.bing.com/th/id/OIP.FiKEM7BvN22MvVcPkR6ajQHaE7?w=352&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 7, name: "Elegant Engagement Decor", price: "$350", image: "https://th.bing.com/th/id/OIP.izXWOIRyHKLjJVjh2NiWbQHaE8?w=277&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 8, name: "Royal Engagement Setup", price: "$480", image: "https://th.bing.com/th/id/OIP.8qbVGayj3s8ErqD7V96JOAHaE8?w=232&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 9, name: "Modern Engagement Theme", price: "$330", image: "https://th.bing.com/th/id/OIP.whXM14FCY3FL6fybfHZhxwHaFD?w=219&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 10, name: "Engagement Venue Decor", price: "$410", image: "https://th.bing.com/th/id/OIP.siNHpJDNm_h7jrxdkp11pQHaDw?w=289&h=177&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]
    },
    {
        id: 605,
        title: "Naming Ceremony",
        image: "https://th.bing.com/th/id/OIP.gPoyJ4foup_rnz8YbSJmTAHaGz?w=221&h=203&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        products: [
            { id: 1, name: "Naming Ceremony Decor 1", price: "$250", image: "https://th.bing.com/th/id/OIP.gPoyJ4foup_rnz8YbSJmTAHaGz?w=221&h=203&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 2, name: "Naming Ceremony Decor 2", price: "$320", image: "data:image/webp;base64,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" },
            { id: 3, name: "Naming Ceremony Decor 3", price: "$280", image: "https://th.bing.com/th/id/OIP._ci6wICP6yBYvWXvwz9IcQHaGp?w=205&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 4, name: "Naming Ceremony Decor 4", price: "$310", image: "https://th.bing.com/th/id/OIP.iMcjLvHRYoQq38AzwVdFiAHaFS?w=257&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 5, name: "Naming Ceremony Decor 5", price: "$410", image: "https://th.bing.com/th/id/OIP.oJe_ASpwFw5dp0OK3CMibQHaE8?w=281&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 6, name: "Naming Ceremony Decor 6", price: "$220", image: "https://th.bing.com/th/id/OIP.XIr8gCyn-zxYfG2S_eLp3wHaJ4?w=126&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 7, name: "Naming Ceremony Decor 7", price: "$350", image: "https://th.bing.com/th/id/OIP.H8kSMIjpyMJfODasQ7sBTwHaE8?w=217&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 8, name: "Naming Ceremony Decor 8", price: "$510", image: "https://th.bing.com/th/id/OIP.dg8eHYTpUtk1AF_4JX0REAHaKM?w=155&h=212&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 9, name: "Naming Ceremony Decor 9", price: "$290", image: "https://th.bing.com/th/id/OIP.mQnyVaTLtz5VcFsNjM2LyAAAAA?w=151&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 10, name: "Naming Ceremony Decor 10", price: "$440", image: "https://th.bing.com/th/id/OIP.CXMbi02v_C61avrIZleq1wHaEK?w=275&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 11, name: "Naming Ceremony Decor 11", price: "$330", image: "https://th.bing.com/th/id/OIP.MYUyEzfveL49N6YZDsjADwAAAA?w=309&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 12, name: "Naming Ceremony Decor 12", price: "$295", image: "https://th.bing.com/th/id/OIP.rVpxHoArJpjtQXbN21sJygHaFB?w=242&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 13, name: "Naming Ceremony Decor 13", price: "$380", image: "https://th.bing.com/th/id/OIP.CH1EF2JO86EZVQlnrVOgVAHaFh?w=232&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]
    },
    {
        id: 606,
        title: "House Warming Ceremony",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
        products: [
            { id: 1, name: "House Warming Decor 9", price: "$195", image: "https://th.bing.com/th/id/OIP.EK2vvWPr_yarPgnwOap71wHaEK?w=261&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 2, name: "House Warming Decor 10", price: "$215", image: "https://th.bing.com/th/id/OIP.pDnyoI84zjforkGz372jGwHaEK?w=326&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 3, name: "House Warming Decor 11", price: "$185", image: "https://th.bing.com/th/id/OIP.kJJqr1zaRp3EYqzPWZmuWAHaOu?w=116&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 4, name: "House Warming Decor 12", price: "$230", image: "https://th.bing.com/th/id/OIP.oRE9BITvXqJufaCR0NKSdQHaJQ?w=143&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 5, name: "House Warming Decor 13", price: "$260", image: "https://th.bing.com/th/id/OIP.9HPFqOrZ3QuKXY9lLfLlBQHaEK?w=269&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 6, name: "House Warming Decor 14", price: "$210", image: "https://th.bing.com/th/id/OIP.5ZmVGOSDJY2aAX-mcCnGKwHaDm?w=337&h=170&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 7, name: "House Warming Decor 15", price: "$175", image: "https://th.bing.com/th/id/OIP.DfwD1af0KtPoB8TuWF330gHaE8?w=251&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 8, name: "House Warming Decor 16", price: "$225", image: "https://th.bing.com/th/id/OIP.co1A2sxpCu-5Nmw58CU6XwHaE7?w=229&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 9, name: "House Warming Decor 17", price: "$195", image: "https://th.bing.com/th/id/OIP.srkWIaq6pNV4vM80nUQNfwHaHa?w=145&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 10, name: "House Warming Decor 18", price: "$245", image: "https://th.bing.com/th/id/OIP.LQHSCo6q5JoZ4r5SbxTjUAHaFX?w=217&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 11, name: "House Warming Decor 19", price: "$205", image: "https://th.bing.com/th/id/OIP.pDnyoI84zjforkGz372jGwHaEK?w=326&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
        ]
    },
];

export const toysAndGifts = [
    {
        id: 701,
        title: "Premium Toys Collection",
        image: toysAndGiftsImg,
        price: 1999,
        originalPrice: 2499,
        discountPercentage: 20,
        rating: 4.8,
        reviewCount: 156,
        description: "A premium collection of colorful and safe toys for children. Includes wooden building blocks, a teddy bear, toy cars, and a tall rocket ship.",
        inclusions: [
            "Classic brown teddy bear",
            "Colorful wooden building blocks",
            "Stacking rings",
            "Toy cars and buses",
            "Yellow toy rocket"
        ],
        exclusions: [
            "Batteries not included",
            "Gift wrapping (available as add-on)"
        ],
        thingsToRemember: [
            "Suitable for ages 3 and up",
            "Some toys may contain small parts"
        ],
        policies: {
            cancellation: "Free return within 7 days of delivery.",
            refund: "100% refund on unopened boxes."
        }
    }
];

// Re-exporting legacy data to avoid breaking other components if they are still imported
export const services = [];
export const pricing = [];
export const reviews = [];
export const faq = [];
export const galleryImages = [
    cocomelonDecor,
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1464347719102-1c0ca0623ec2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1574391884720-bbc37bb0f93c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1549413247-497c36a29790?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518131338789-f53874313fb6?auto=format&fit=crop&q=80&w=800",
    galleryNew1

];




export const locations = ["Hyderabad", "Bangalore", "Mumbai"];

export const statesWithCities = [
    {
        state: "Telangana",
        cities: ["Hyderabad", "Secunderabad", "Warangal", "Nizamabad", "Khammam"]
    },
    {
        state: "Karnataka",
        cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"]
    },
    {
        state: "Maharashtra",
        cities: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"]
    },
    {
        state: "Tamil Nadu",
        cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"]
    },
    {
        state: "Delhi",
        cities: ["New Delhi", "North Delhi", "South Delhi", "West Delhi", "East Delhi"]
    },
    {
        state: "West Bengal",
        cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"]
    },
    {
        state: "Gujarat",
        cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"]
    },
    {
        state: "Rajasthan",
        cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"]
    }
];
