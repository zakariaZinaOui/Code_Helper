package com.example.microservice_code_generation.controller;

import okhttp3.*;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/code-generation")
class CodeGenerationController {
    private static final String GEMINI_API_KEY = "AIzaSyBUN2-UViJJfmCLbCsKma5vCOyxQDfaySg";
    private static final String GEMINI_API_URL = "https://api.gemini.com/v1/generate";

    @PostMapping
    public String generateCode(@RequestBody String specifications) throws IOException {
        OkHttpClient client = new OkHttpClient();

        String jsonRequest = """
            {
                "model": "your-model-name",
                "prompt": "Generate code for: """ + specifications + """",
                "max_tokens": 100
            }
        """;

        RequestBody body = RequestBody.create(
                jsonRequest,
                MediaType.parse("application/json")
        );

        Request request = new Request.Builder()
                .url(GEMINI_API_URL)
                .addHeader("Authorization", "Bearer " + GEMINI_API_KEY)
                .post(body)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                return response.body().string();
            } else {
                return "Error during the call to Gemini: " + response.code();
            }
        }
    }
}