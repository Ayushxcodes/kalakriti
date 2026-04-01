"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const poems = [
  {
    text: `ख़ुशी ही ख़ुशी बेसबब देखती हूँ
तुझे मुस्कराते  मैं  जब देखती हूँ

तुझे ही तुझे बस, मुझे देखने की
बढ़ेगी कहाँ तक तलब! देखती हूँ

यहाँ कौन कैसा है  मुझको पता है
मुझे सब ख़बर है मैं सब देखती हूँ

ग़मों को ख़ुशी में बदलना है मझको
मिलें तो ज़रा मुझको अब, देखती हूँ

कभी तो रहम मुझपे आएगा उसको
कहाँ तक सताएगा रब ! देखती हूँ`,
    image: "/poem1.jpeg",
  },
  {
    text: `कभी तो बात मेरी मान जाया कर
न मेरी चाहतों को आजमाया कर

मोहब्बत करनी है तो कर सलीके से 
मोहब्बत का तमाशा मत बनाया कर

नज़र तुझको न लग जाए ज़माने की
ज़माने से ज़रा ख़ुद को बचाया कर

मेरी आँखें अगर हैं झील के जैसी 
कहीं मत जा इन्हीं में डूब जाया कर

"खनक" ये ज़िंदगानी है बहुत छोटी
हँसा कर और खुल कर मुस्कुराया कर 

कवयित्री-स्नेहा त्रिपाठी 'खनक '`,
    image: "/poem2.jpeg",
  },
  {
    text: `प्रार्थना है यही लौट आओ प्रिये, 
तुम न होगे तो मै भी किधर जाऊँगी l
टूट कर मैं बिखरी सी गई हूँ बहुत ,
प्रेम पा कर तुम्हारा सँवर जाऊँगी l

मन सुकोमल बड़ा है दुखाओ न तुम l
रूठ कर इस तरह दूर जाओ न तुम l
पीर मेरी अगर हो सके बाँट लो ,
तोड़ कर ये हृदय मुस्कुराओ न तुम l
 
बस तुम्हारा मुझे आसरा है प्रिये 
तुम अगर चाह लो मैं निखर जाऊँगी l
प्रेम पा कर तुम्हारा .......     

प्राण प्रिय हो तुम्हीं प्राण धन हो तुम्हीं 
देह हूँ मात्र मैं मेरा मन हो तुम्हीं l
भाग्य में साथ मेरा तुम्हारा न हो ,
कल्पनाओं में सातों जनम हो तुम्हीं l

देह अवसान की ओर अब जा रही 
इक छुअन से तुम्हरी मैं तर जाऊँगी l
प्रेम पा कर तुम्हारा .......     

प्रेम ही मेरे जीवन का आधार है l
और सब कुछ बिना प्रेम बेकार है l
साथ तुम दो मेरा तो मैं जग जीत लूँ,
तुम न होगे तो जीवन को धिक्कार है l

जल रही हूँ विरह अग्नि में इस तरह 
लग रहा मृत्यु से पूर्व मर जाऊँगी l
प्रेम पा कर तुम्हारा .......

कवयित्री-स्नेहा त्रिपाठी 'खनक '`,
    image: "/poem3.jpeg",
  },
]

export default function PoetrySplit() {
  return (
    <section className="w-full py-20 px-6 space-y-16">
      {poems.map((poem, index) => (
        <Card key={index} className="max-w-6xl mx-auto rounded-2xl shadow-xl overflow-hidden">
          <CardContent className="p-0 grid md:grid-cols-2">

            {/* alternate layout */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`p-10 flex items-center bg-muted order-2 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
            >
              <p className="whitespace-pre-line text-lg leading-relaxed italic">
                {poem.text}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative min-h-[420px] order-1 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
            >
              <Image
                src={poem.image}
                alt="poetry visual"
                fill
                className="object-cover"
              />
            </motion.div>

          </CardContent>
        </Card>
      ))}
    </section>
  )
}
