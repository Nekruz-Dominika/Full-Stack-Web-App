const mongoose = require('mongoose');

const Plant = require('../models/Plant.model')

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/module-2-project';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const plants = [
    {
        name: 'Sansevieria',
        description: 'Sansevierias (Snake Plants) are some of the toughest plants you can find. Whether indoors, in your garden or on your balcony, these spiky beauties can put up with almost anything. Sansevierias have a slow to moderate growth rate. These evergreen perennials are very long-lived, unlike some Houseplants. Snake Plants are highly pest-resistant but in poor conditions, they can get mealybugs and/or spider mites.',
        sun: 'medium',
        water: 'low',
        price: '9.99 &euro;',
        image: 'https://images.unsplash.com/photo-1620127807580-990c3ecebd14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    },
    {
        name: 'Monstera',
        description: "Monstera are species of evergreen tropical vines and shrubs that are native to Central America. They are famous for their natural leaf-holes, which has led to the rise of their nickname, Swiss Cheese Plant. The Monstera's leaf-holes are called fenestrations and are theorized to maximize sun fleck capture on the forest floor by increasing the spread of the leaf while decreasing the mass of leaf cells to support.  Monsteras, like many aroids, were made known formally to the botanical world during the early 20th century, although they had been known for much longer by the indigenous peoples of Central America.",
        sun: 'medium',
        water: 'medium',
        price: '19.99 &euro;',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    },
    {
        name: 'Zamioculcas',
        description: 'A couple of decades ago, Dutch nurseries located in South Africa saw the plant’s propagating potential and in 1996 started distributing it around the world. Since then, ZZ plants have entered hearts, homes, and offices worldwide. ZZ plant, with its wide, attractive, dark green leaves, boasts many favorable traits for offices and homes. ZZ plant tolerates neglect, is drought tolerant, and accepts low-light conditions without throwing a fit. Its waxy, smooth leaves reflect sunlight and brighten rooms. ZZ usually grows slowly to a height and width of two to three feet so it is not a plant monster that outgrows containers quickly.',
        sun: 'low/medium',
        water: 'low/medium',
        price: '17.99 &euro;',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
    {
        name: 'Ficus Elastica',
        description: 'If you’re looking for a houseplant that makes a bold statement, then look no further than a Rubber Plant (Ficus elastica), also called Indian Rubber Tree. With their ease of care, these are perfect indoor plants for beginners. Rubber Plants belong in the large genus of Ficus, which include around 900 different species of trees, vines and shrubs, and is broken down even further with the vast amount of different cultivars for each of the species. All varieties of Rubber Plants are considered broadleaf evergreens, with large, thick, leathery foliage. Their native range is from the Himalayas to Sumatra, Malaysia and Java.',
        sun: 'medium',
        water: 'medium/high',
        price: '18.99 &euro;',
        image: 'https://images.unsplash.com/photo-1596547609811-70a5082c84cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
    {
        name: 'Chinese money plant',
        description: 'Also known as Pilea Peperomioides, the Chinese Money Plant is an eye-catching green beauty that has become one of the most loved plants around the world. This stunning houseplant also goes by UFO Plant, Pancake Plant, Lefse Plant, Missionary Plant, Bender Plant and Mirror Grass Plant.  This plant is a member of the stinging nettle family (don’t worry – it won’t sting you!) and is super easy to look after. This remarkable little plant is a true beauty. With its rounded dark green leaves, perfectly shaped to add a bit of interest to your indoor jungle.',
        sun: 'medium/high',
        water: 'medium',
        price: '13.99 &euro;',
        image: 'https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
    {
        name: 'Epipremnum aureum',
        description: 'The Pothos, or the Epipremnum aureum, is native to Southeast Asia. It has the reputation of being one of the easiest houseplants to take care of. Its common name, Pothos, comes from the genus it was once classified under: Pothos aureus. In the wild, it is known to overgrow forest floors and tree trunks due to its aerial root system which can be used to help it grow vertically in the home up a coir pole. In good indoor conditions, you can expect the Pothos to trail to 10 feet long and grow leaves that are 3 feet in length if trained to climb! The Pothos is particularly fitting for indoor settings because it is able to filter gaseous toxins like formaldehyde from the air.',
        sun: 'medium/high',
        water: 'medium',
        price: '12.99 &euro;',
        image: 'https://images.unsplash.com/photo-1602491674275-316d95560fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    },
    {
        name: 'Dracaena reflexa',
        description: 'Dracaena reflexa is a popular houseplant with origins in Madagascar and other Indian ocean islands. The origin of the plant name comes from the ancient Greek word drakaina or “female dragon,” due to a red gum-like resin in the stems of dracaena that was likened to dragon blood. Centuries ago, this resin was used for toothpaste, dyes, and medicines. Today, it is still used for varnish and photoengraving. The dracaena plant is also known as the Song of India and Pleomele. The dracaena plant is a popular ornamental houseplant, grown both indoors and outdoors in subtropical climates. It reaches a height of about three feet indoors, and has a bushy tree type of look.',
        sun: 'medium',
        water: 'low/medium',
        price: '7.99 &euro;',
        image: 'https://images.unsplash.com/photo-1607961874373-460fab9111fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    },
    {
        name: 'Aloe Vera',
        description: 'The aloe vera plant is an easy, attractive succulent that makes for a great indoor companion. Aloe vera plants are useful, too, as the juice from their leaves can be used to relieve pain from scrapes and burns when applied topically. Aloe vera is a succulent plant species of the genus Aloe. The plant is stemless or very short-stemmed with thick, greenish, fleshy leaves that fan out from the plant’s central stem. The margin of the leaf is serrated with small teeth. The gel from aloe vera leaves can be used topically, but should NOT be eaten by people or pets. It can cause unpleasant symptoms such as nausea or indigestion and may even be toxic in larger quantities.',
        sun: 'medium',
        water: 'low',
        price: '7.99 &euro;',
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    },
    {
        name: 'Pachira aquatica',
        description: 'The money tree, Pachira aquatica, is a sought-after house plant that has attractive umbrella-like leaves and an easygoing nature. It’s often sold with a braided trunk. Pachira aquatica goes by many names – water chestnut, guinea nut, Guiana chestnut, provision tree, French peanut, Malabar chestnut, Mexican fortune tree, dollar plant and saba nut. Part of the Malvaceae family, it’s a tropical evergreen tree, native to central and south America, where it can reach 20m tall and produces edible nuts. According to the Chinese art of feng shui, a properly placed money tree is considered to bring prosperity – good fortune is said to be trapped within the trunk and the five-lobed leaves are also considered lucky. Money trees are therefore often given as wedding or housewarming gifts. The braided trunk isn’t a natural feature – in plant nurseries, the supple young stems of young plants are braided together before they turn woody.',
        sun: 'medium/high',
        water: 'low/medium',
        price: '12.99 &euro;',
        image: 'https://images.unsplash.com/photo-1633789242668-886f4098ea1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    },
    {
        name: 'Calathea makoyana',
        description: 'The Calathea Makoyana or Peacock Plant as it is more commonly known is a wonderful plant that can be known to grow up to 2ft in height when cared for correctly. Also named Cathedral Windows. Originally from Brazil this plant is a popular choice around the world for a house plant mainly because it makes a lovely addition to any home due to its beautiful foliage and bold markings. With its somewhat tropical origins, The Peacock Plant is a tall, slender plant that with the right care can become a colorful house plant for your collection. Due to its Brazilian roots, humidity is best for this particular plant and it loves nothing more than to be misted although it is important to use distilled or rain water as the fluoride can cause damage to the delicate leaves.',
        sun: 'low/medium',
        water: 'medium',
        price: '16.99 &euro;',
        image: 'https://images.unsplash.com/photo-1630477726911-47765c6c9d97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
    {
        name: 'Agalonema Kiwi',
        description: 'The name Aglaonema derives from the Greek and combines ‘agláos’ (shining) and ‘néma’ (thread). Aglaonemas grow wild in the subtropical rainforests of Thailand, Indonesia and Malaysia, where the plant is happy beneath the leaf canopy of larger trees and shrubs which ensures that the sun can hardly reach the Aglaonema.  Aglaonema’s leaves offer fantastic colours with delicate markings. The pale green versions are the best-known, but this fabulous houseplant is also available with a silver, yellow and red tinge. The plant does flower, but modestly at best. The flowers are under the leaf and grow in an ear surrounded by a bract, with female flowers at the base and male flowers higher up. The male flowers have the tiny shiny stamens from which the plant derives its name. As the flowers are pretty unimpressive and Aglaonema puts a lot of energy into them, it’s best to cut them off in order to preserve the plant’s decorative value.',
        sun: 'medium/high',
        water: 'medium/high',
        price: '13.99 &euro;',
        image: 'https://images.unsplash.com/photo-1625666341991-94e3a437bb2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    },
    {
        name: 'String of hearts plant',
        description: 'The String of Hearts, also known as Ceropegia woodii,  is a sweet and fantastic hanging plant native to South Africa, Swaziland, and Zimbabwe. Due to its dark green with variegated silver markings or in cream, pink, and green heart-shaped, patterned leaves, this magnificent succulent has stolen the hearts of many collectors. It can grow up to 2 to 3-inches tall and has purple-toned stems that can reach about 3 to 9 feet long, so make sure to hang this plant somewhere high, for you to be able to witness how breathtaking it can be, especially when it starts to cascade out of the pot like a waterfall.',
        sun: 'medium/high',
        water: 'low',
        price: '9.99 &euro;',
        image: 'https://images.unsplash.com/photo-1622479303268-c7be347dfaf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    },
]




Plant.create(plants)
    .then(plantsFromDB => {
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while adding plants to the DB: ${err}`));