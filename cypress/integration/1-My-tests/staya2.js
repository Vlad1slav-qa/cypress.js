describe('Вход на сайт с неверным паролем', function () {

    it('Ввод логина и пароля, клик по кнопке Войти', function () {
       cy.visit('https://staya.dog/');
       cy.get('.header-bottom__right--link').click()
       cy.get('.auth-form > form > [type="email"]').type('Ввести_валидный_логин');
       cy.get('.auth-form > form > [type="password"]').type('Ввести_невалидный_пароль');
       cy.get('.auth-form__submit > .s-button__content').click();
       })
})


describe('Проверка, что авторизация не прошла', function () {

    it('Невозможно войти с предоставленными учетными данными.', function () {
       cy.contains('Невозможно войти с предоставленными учетными данными.');
       })
})