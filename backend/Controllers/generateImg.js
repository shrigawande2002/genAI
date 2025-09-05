import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body;

        // const response = await ai.models.generateContent({
        //     // model: "gemini-2.5-flash-image-preview",
        //     model='imagen-4.0-generate-001',
        //     contents: prompt,
        // });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-image-preview",
            contents: prompt,
        });

        // Extract image from response
        const parts = response.candidates[0]?.content?.parts || [];
        let base64Image = null;

        for (const part of parts) {
            if (part.inlineData) {
                base64Image = part.inlineData.data;
                break;
            }
        }

        if (!base64Image) {
            return res.status(400).json({ error: "No image data returned" });
        }

        // Send back as base64 string
        res.status(200).json({
            image: `data:image/png;base64,${base64Image}`,
        });
    } catch (error) {
        console.error("Error generating image:", error);
        res.status(500).send("Error generating image");
    }
};


// const prompt =
//     "Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme";




// for (const part of response.candidates[0].content.parts) {
//     if (part.inlineData) {
//         const imageData = part.inlineData.data;
//         const buffer = Buffer.from(imageData, "base64");
//         fs.writeFileSync("gemini-image.png", buffer);
//         console.log("✅ Image saved as gemini-image.png");
//     } else if (part.text) {
//         console.log("Text response:", part.text);
//     }
// }

// main().catch(console.error);

