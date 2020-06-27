HTML-код формы(модальное окно):
```php
<div class="overlay fade">
	<div class="popup">
		<div class="popup-close">&times;</div>
			<div class="popup-form">	
				<form action="#" class="main-form">
					<input class="popup-form__input" name="phone" type="tel" required placeholder="+7(978) 973 33 45">
					<button class="button popup-form__btn">
						Оставить заявку!
					</button>
				</form>
			</div>
	</div>
</div>
