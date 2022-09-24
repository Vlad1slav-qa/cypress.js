describe('[+] Вход на сайт с валидными данными', function () {

    it('Ввод логина и пароля, клик по кнопке Войти', function () {
       cy.visit('https://staya.dog/');
       cy.get('.header-bottom__right--link').click()
       cy.get('.auth-form > form > [type="email"]').type('1savenkov.vladislav@gmail.com');
       cy.get('.auth-form > form > [type="password"]').type('DlyaAvtoTests99');
       cy.get('.auth-form__submit > .s-button__content').click();
       cy.contains('Мои заказы'); // Проверяем, что авторизация прошла успешно
       cy.get('button.profile__nav-link').click(); // Выходим из учетной записи для проверки следующего кейса
       cy.get("#__layout > div > div > section > div > div > div > button.box__button.box__button_ok.s-button.s-button_theme-dark").click();
       cy.contains('Амуниция staya.');
       })
})

describe('[-} Вход на сайт с неверным паролем', function () {

    it('Ввод логина и пароля, клик по кнопке Войти', function () {
       cy.get('.header-bottom__right--link').click()
       cy.get('.auth-form > form > [type="email"]').type('1savenkov.vladislav@gmail.com');
       cy.get('.auth-form > form > [type="password"]').type('DlyaAvtoTests');
       cy.get('.auth-form__submit > .s-button__content').click();
       cy.contains('Невозможно войти с предоставленными учетными данными.'); // Проверяем, что авторизация не прошла
       })
})
