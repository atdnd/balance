---
Title: Contacto
---

<script src='https://www.google.com/recaptcha/api.js'></script>
<form class="form" action="//formspree.io/balancenegativo@gmail.com" method="POST">
    <fieldset>
        <div class="form__row">
            <label class="form__lbl">
                <b class="form__lbl-name">Nombre</b>
                <input type="text" name="nombre" id="txt-nombre" placeholder="Juan" required>
            </label>
            <label class="form__lbl">
                <b class="form__lbl-name">Apellido</b>
                <input type="text" name="apellido" placeholder="Pérez" id="txt-apellido">
            </label>
        </div>
        <div class="form__row">
            <label class="form__lbl">
                <b class="form__lbl-name">E-Mail</b>
                <input type="email" name="email" id="txt-email" placeholder="ej: juanperez@mail.com" required>
            </label>
        </div>
        <div class="form__row">
            <label class="form__lbl">
                <b class="form__lbl-name">Mensaje</b>
                <textarea name="mensaje" id="txt-mensaje" required></textarea>
            </label>
        </div>
        <div class="form__row">
            <div class="g-recaptcha" data-sitekey="6Lfx_wgTAAAAAPc4UcQ41oYn0eqNsjM4_NvuMuBN"></div>
        </div>
        <div class="form__actions">
            <button class="btn btn--form" type="submit">Enviar</button>
        </div>
    </fieldset>

</form>
