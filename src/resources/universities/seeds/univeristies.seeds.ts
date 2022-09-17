import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { UniversitiesService } from '../universities.service';
import axios from 'axios';


@Injectable()
export class UniversitiesSeed {
    private readonly COUNTRIES = [
        "argentina",
        "brasil",
        "chile",
        "colombia",
        "paraguai",
        "peru",
        "suriname",
        "uruguay"
    ];

    private readonly BASE_URL = 'http://universities.hipolabs.com/search?country='
    constructor(
        private readonly universitiesService: UniversitiesService,
    ) { }

    @Command({ command: 'create:universities', describe: 'create multiple universities' })
    async create() {
        let promises = [];
        for await (const country of this.COUNTRIES) {
            const response = await axios.get(`${this.BASE_URL}${country}`);
            const countryUniveristies = response.data.map(item => (
                this.universitiesService.create({
                    domains: item.domains,
                    alpha_two_code: item.alpha_two_code,
                    country: item.country,
                    web_pages: item.web_pages,
                    name: item.name,
                    "state-province": item['state-province']
                })
            ));

            promises = [...countryUniveristies];
        }

        try {
            await Promise.all(promises);
            process.stdout.write('Success!');
        }catch(err) {
            process.stdout.write('Error...');
        }
    }
}