import * as restClientPkg from 'typed-rest-client/RestClient'
import { Octokit, App } from "octokit";

import axios, {AxiosResponse} from "axios";
interface GitResponse {
    response: number;
}

async  function runSample() {
    const octokit = new Octokit({
        auth: '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'
    })

    let response = await octokit.request('GET /repos/{owner}/{repo}/stats/contributors', {
        owner: 'vbhandar12',
        repo: 'GitRestAPIClient'
    })
   console.log(response);
//     let result: AxiosResponse = await axios.get(`http://localhost:3000/`);
//     let gitResponse:GitResponse = result.data;
//     console.log('Response is: '  +gitResponse);
}
console.log("Starting...")
runSample();
console.log("Ended !")