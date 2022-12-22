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

    let response = await octokit.request('GET /repos/{owner}/{repo}/stats/commit_activity', {
        owner: 'vbhandar12',
        repo: 'Dev'
    })
   console.log(response);
//     let result: AxiosResponse = await axios.get(`http://localhost:3000/`);
//     let gitResponse:GitResponse = result.data;
//     console.log('Response is: '  +gitResponse);
}
console.log("Starting...")
runSample();
console.log("Ended !")