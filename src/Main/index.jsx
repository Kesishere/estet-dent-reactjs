import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./style.css"

export default class MainPage extends Component {
    render() {
        return (
            <Grid className="container" spacing={16}>
                <Grid item xs={6}>
                    <Typography variant="h2">О клинике</Typography>
                    <br/>
                    <Typography variant="h5">
                        <p>Наша клиника была задумана как достойная альтернатива стоматологическим клиникам, расположенным
        в центре, - для людей, которые хотят получить услуги высокого уровня рядом с домом.</p>
                        <p>Мы небольшая клиника, что позволяет нам следить за качеством наших услуг и удерживать их на стабильно высоком уровне.</p>
                        <p>Мы постоянно совершенствуем свой профессиональный уровень, используем современные методики лечения
        и дорогие высококачественные материалы.</p>
                    </Typography>
                    <Typography variant="h3">Почему вам стоит пройти стоматологическое лечение зубов у нас, в «ЭстетДент»?</Typography>
                    <br/>
                    <Typography variant="h5">
                        <ul>
                            <li>Штат высококвалифицированных стоматологов;</li>
                            <li>Современное оборудование;</li>
                            <li>Современные медицинские препараты и надежные качественные материалы;</li>
                            <li>Доброжелательный вежливый персонал;</li>
                            <li>Умеренная ценовая политика;</li>
                            <li>Индивидуальный подход к каждому пациенту;</li>
                            <li>Возможность получения профессиональной консультации и профилактического врачебного осмотра../</li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid item xs={6} className="map">
                    <Typography variant="h3">Карта</Typography>
                    <div className="map__content">
                        <a href="https://yandex.ru/maps/?um=constructor%3Aed4595d8fa240d1a5c77fff3aa1265450d17527b974738de3fadaa98f26e141a&amp;source=constructorStatic" target="_blank"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Aed4595d8fa240d1a5c77fff3aa1265450d17527b974738de3fadaa98f26e141a&amp;width=600&amp;height=436&amp;lang=ru_RU" alt="" /></a>
                    </div>
                </Grid>
            </Grid>

        )
    }
}
