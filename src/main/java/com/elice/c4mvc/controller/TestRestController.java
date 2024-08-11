package com.elice.c4mvc.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestRestController {

    @PostMapping("/api/login/submit")
    public String loginProcess(@RequestParam("name") String name, @RequestParam("email") String email, @RequestParam("password") String password) {
        System.out.println("name = " + name);
        System.out.println("email = " + email);
        System.out.println("password = " + password);
        System.out.println("로그인 완료");
        return "200 OK";
    }
}
