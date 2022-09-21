describe('Вход на сайт с валидными данными', function () {

    it('Ввод логина и пароля, клик по кнопке Войти', function () {
       cy.visit('https://staya.dog/');
       cy.get('.header-bottom__right--link').click()
       cy.get('.auth-form > form > [type="email"]').type('Ввести_валидный_логин');
       cy.get('.auth-form > form > [type="password"]').type('Ввести_валидный_пароль');
       cy.get('.auth-form__submit > .s-button__content').click();
       })
})


describe('Проверка, что авторизация прошла', function () {

    it('Поиск текста: "Мои заказы"', function () {
       cy.contains('Мои заказы');
       })
})