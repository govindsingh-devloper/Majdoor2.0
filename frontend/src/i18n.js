import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    lng:'en',
    fallbackLng:'en',
    interpolation:{
      escapeValue:  false
    },

    resources:{
        en:{
            translation:{
                title:' Why Fix It Yourself? Leave It To The Majdoors.',
                 label:'Majdoor is more than just a platform for connecting workers and clients.',
                 about1:"best quality Repair services",
                 about2:"Our product is designed to meet the needs of both urban and rural populations, bridging the geographical gaps that often limit access to opportunities. With our product, you can communicate with workers who have the skills you need, and verify their credentials in real-time. Our product also ensures security and accountability, fostering effective collaboration through instant communication. Whether you are looking for a plumber, a teacher, or a web developer, our product can match you with the right person for the job.",
                 services1:"Carpenter",
                 services2:"services",
                 services3:"Our",
                 services4:"We bring traditional charm to modern spaces with our exceptional Carpenter Services.",
                 s1: "Plumber",
                 s2:"We deal with everything from small repairs to new installations. Highly trained technicians quickly tackle all your plumbing issues.",
                s3:"Painter",
                s4:"Transform your spaces with beauty and finesse, get the painting job done by our experts and reshape your dream home.",
                s5:"Electrician",
                s6:"Count on us for all your professional and dependable electrical jobs that keep your property running smoothly and safely.",
                s7:"Shuttering and Barbending",
                s8:"Labour for binding bars for house construction or for industrial construction.",
                s9:"Welder",
                s10:"Close attention to detail, ensuring each weld is executed with accuracy and meets specific project requirements.",
                s11:"Mason",
                s12:"Elevate your work speed with expert Masons and reduce construction costs, just a click away.",
                s13:"Labour",
                s14:"Quality talent at your finger tips, efficiently access semi-skilled and un-skilled workers for all your construction needs.",
                h1:"Home",
                a1:"About",
                S:"Services",
                R:"Reviews",
                C:"Contact Us",
                L:"Login",
                S:"Sign Up",
                l1:"Login Here",
            }
        },
        hi:{
            translation:{
                title:'खुद क्यों ठीक करें? इसे मजदूरों पर छोड़ दें।',
                label:'मजदूर केवल श्रमिकों और ग्राहकों को जोड़ने वाला मंच ही नहीं है।',
                about1:"सर्वोत्तम गुणवत्ता वाली मरम्मत सेवाएं",
                about2:"हमारा उत्पाद शहरी और ग्रामीण दोनों आबादी की जरूरतों को पूरा करने के लिए डिज़ाइन किया गया है, जो अक्सर अवसरों तक पहुंच को सीमित करने वाली भौगोलिक खाइयों को पाटता है। हमारे उत्पाद के साथ, आप उन श्रमिकों के साथ संवाद कर सकते हैं जिनके पास आपके आवश्यक कौशल हैं, और उनके प्रमाणपत्रों को वास्तविक समय में सत्यापित कर सकते हैं। हमारा उत्पाद सुरक्षा और जवाबदेही भी सुनिश्चित करता है, त्वरित संचार के माध्यम से प्रभावी सहयोग को बढ़ावा देता है। चाहे आपको एक प्लंबर, एक शिक्षक, या एक वेब डेवलपर की आवश्यकता हो, हमारा उत्पाद आपको काम के लिए सही व्यक्ति से मिलवा सकता है।",
                services1:"बढ़ई",
                services2:"सेवाएं",
                services3: "हमारी",
                services4:"हम अपनी उत्कृष्ट बढ़ई सेवाओं के साथ आधुनिक स्थानों में पारंपरिक आकर्षण लाते हैं।",
                s1:"प्लंबर",
                s2:"हम छोटे-मोटे मरम्मत से लेकर नई इंस्टॉलेशन तक हर चीज का समाधान करते हैं। उच्च प्रशिक्षित तकनीशियन आपके सभी नलसाजी समस्याओं को जल्दी से हल कर लेते हैं।",
                s3: "पेंटर",
                s4:"अपने स्थानों को सुंदरता और निपुणता से बदलें, हमारे विशेषज्ञों से पेंटिंग का काम कराएं और अपने सपनों के घर को नया आकार दें।",
                s5:"इलेक्ट्रीशियन",
                s6:"आपके सभी पेशेवर और विश्वसनीय विद्युत कार्यों के लिए हम पर भरोसा करें जो आपकी संपत्ति को सुचारू रूप से और सुरक्षित रूप से चलाते हैं।",
                s7:"शटरिंग और बारबेंडिंग",
                s8:"निर्माण के लिए बार्बेंडिंग कार्य के लिए श्रमिक",
                s9:"वेल्डर",
                s10:"विवेकपूर्ण ध्यान, सुनिश्चित करना कि प्रत्येक वेल्ड सटीकता से किया जाए और विशिष्ट परियोजना आवश्यकताओं को पूरा करता है।",
                s11:"मसौन",
                s12:"विशेषज्ञ मसौन्स के साथ अपनी कार्य गति को बढ़ाएं और निर्माण लागत को कम करें, बस एक क्लिक दूर।",
                s13:"श्रम ",
                s14:"अपनी उंगलियों पर उच्च गुणवत्ता वाले प्रतिभागत मजदूरों तक पहुंचें, सभी अपनी निर्माण आवश्यकताओं के लिए आदर्श रूप से अनुभवी और अअसे श्रमिकों को हासिल करें।",
                h1:"घर",
                a1:"के बारे में",
                S:"सेवाएँ ",
                R:"समीक्षाएँ",
                C:"संपर्क करें ",
                L:" लॉगिन",
                S:"साइन अप",
                l1:"यहाँ लॉगिन करें",

            }
        }
    }

});