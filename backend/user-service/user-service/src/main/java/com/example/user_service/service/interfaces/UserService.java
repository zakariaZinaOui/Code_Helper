package com.example.user_service.service.interfaces;

import com.example.user_service.dto.AuthenticationResponse;
import com.example.user_service.dto.UserDto;

import java.util.List;

public interface UserService {
	List<UserDto> findAll();
	UserDto findById(final Long id);
 	AuthenticationResponse login(final UserDto userDto);
	AuthenticationResponse register(final UserDto clientDto);

	UserDto update(final UserDto CustomerDto);
 	void deleteById(final Long id);
	boolean existsById(final Long id);
}

