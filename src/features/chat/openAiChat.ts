import { OpenAI } from "openai";
import { Message } from "../messages/messages";

export async function getOpenAIChatResponse(messages: Message[], apiKey: string, model: string) {
  if (!apiKey) {
    throw new Error("Invalid API Key");
  }

  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  const data = await openai.chat.completions.create({
    model: model,
    messages: messages,
  });

  const [aiRes] = data.choices;
  const message = aiRes.message?.content || "エラーが発生しました";

  return { message: message };
}

export async function getOpenAIChatResponseStream(
  messages: Message[],
  apiKey: string,
  model: string
) {
  if (!apiKey) {
    throw new Error("Invalid API Key");
  }

  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  // Assistants
  var assistant = await openai.beta.assistants.retrieve("");
  var thread = await openai.beta.threads.retrieve("");

  for (const message of messages) {
    if (message.content == "") { continue; }

    const m = await openai.beta.threads.messages.create(
      thread.id,
      {
        role: "user",
        content: message.content,     
      }
    );
  }

  const stream = openai.beta.threads.runs.stream(thread.id, {
    assistant_id: assistant.id,
    model: model,
    stream: true
  })

  const res = new ReadableStream({
    async start(controller: ReadableStreamDefaultController) {
      try {
        for await (const event of stream) {
          if (event.event === 'thread.message.delta') {
            const chunk = event.data.delta.content?.[0];
            if (chunk && chunk.type === 'text') {
              controller.enqueue(chunk.text?.value ?? '');
            }
          }
        }
      } catch (error) {
        controller.error(error);
      } finally {
        controller.close();
      }
    }
  });

  return res;
}
