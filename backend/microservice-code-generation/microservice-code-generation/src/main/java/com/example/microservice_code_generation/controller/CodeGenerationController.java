package com.example.microservice_code_generation.controller;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/code-generation")

class CodeGenerationController {
    private static final String OPENAI_API_KEY = "your-openai-api-key";
    private static final String OPENAI_API_URL = "https://api.openai.com/v1/completions";

    @PostMapping
    public String generateCode(@RequestBody String specifications) throws IOException {
        OkHttpClient client = new OkHttpClient();

        String jsonRequest = """
            {
                "model": "text-davinci-003",
                "prompt": "Generate code for: """ + specifications + """",
                "max_tokens": 100
            }
        """;

        RequestBody body = RequestBody.create(
                jsonRequest,
                MediaType.parse("application/json")
        );

        Request request = new Request.Builder()
                .url(OPENAI_API_URL)
                .addHeader("Authorization", "Bearer " + OPENAI_API_KEY)
                .post(body)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                return response.body().string();
            } else {
                return "Erreur lors de l'appel à OpenAI : " + response.code();
            }
        }
    }
}
