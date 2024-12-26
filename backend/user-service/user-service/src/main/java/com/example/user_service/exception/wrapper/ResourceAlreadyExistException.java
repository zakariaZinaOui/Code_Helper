package com.example.user_service.exception.wrapper;


public class ResourceAlreadyExistException extends RuntimeException {
	public ResourceAlreadyExistException(String message) {
		super(message);
	}
}