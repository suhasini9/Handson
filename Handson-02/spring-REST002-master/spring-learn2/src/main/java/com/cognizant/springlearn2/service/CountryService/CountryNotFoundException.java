package com.cognizant.springlearn2.service.CountryService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND, reason = "country not found")
public class CountryNotFoundException extends Exception{

}
