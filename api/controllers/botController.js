import OpenAiApi from "openai";

const openai = new OpenAiApi({
  apiKey: process.env.OPENAI_API_KEY,
});

export const gradeResume = async (req, res) => {
  try {
    const { resumeContent } = req.body; 

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an expert resume grader. Provide a detailed analysis and feedback for improving the resume."
        },
        {
          role: "user",
          content: resumeContent,
        }
      ],
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
    });

    const feedback = response.choices[0].message.content;

    res.status(200).json({ feedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while grading the resume." });
  }
};
