package com.example.user_service.exception.wrapper;

public class AppException extends RuntimeException{
    public AppException(String message)
    {
        super(message);
    }
}