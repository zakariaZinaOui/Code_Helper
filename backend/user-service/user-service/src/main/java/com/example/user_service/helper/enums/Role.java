package com.example.user_service.helper.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Role {
	CLIENT("ROLE_USER");


	private final String role;

}
