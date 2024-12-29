package com.example.microservice_code_correction;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import { GoogleGenerativeAI } from "@google/generative-ai";

@SpringBootApplication
public class CodeCorrectionServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(CodeCorrectionServiceApplication.class, args);
	}
}

@RestController
@RequestMapping("/code-correction")
class CodeCorrectionController {
	


	private static final String enAI = "AIzaSyBUN2-UViJJfmCLbCsKma5vCOyxQDfaySg";
	private static final String GEMINI_API_URL = "https://api.gemini.com/v1/completions";

	@PostMapping
	public String correctCode(@RequestBody String code) throws IOException {
		OkHttpClient client = new OkHttpClient();

		String jsonRequest = """
            {
                "model": "text-davinci-003",
                "prompt": "Correct the following code: """ + code + """",
                "max_tokens": 100
            }
        """;

		RequestBody body = RequestBody.create(
				jsonRequest,
				MediaType.parse("application/json")
		);

		Request request = new Request.Builder()
				.url(Gemini_API_URL)
				.addHeader("Authorization", "Bearer " + enAI)
				.post(body)
				.build();

		try (Response response = client.newCall(request).execute()) {
			if (response.isSuccessful()) {
				return response.body().string();
			} else {
				return "Erreur lors de l'appel à Gemini : " + response.code();
			}
		}
	}
}
