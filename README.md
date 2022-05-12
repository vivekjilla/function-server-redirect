# function-server-redirect

Hosted this function at https://vijilla-function-server-redirect.azurewebsites.net/ 

This is used to repro an issue with redirecting to external sites when using nodejs's createServer inside an Azure function.

Core logic for handling requests is in `index.js`

## To test

Try accessing: https://vijilla-function-server-redirect.azurewebsites.net/api/<any-path> <br/>
It returns a "hello world", as expected
  
Try accessing https://vijilla-function-server-redirect.azurewebsites.net/api/next_function <br/>
It is supposed to redirect to google.com, but throws 500 error.
  
From the local debugging, we see these logs:
  
```
[2022-05-12T11:10:53.271Z] Executed 'Functions.FunctionServer' (Failed, Id=97109fde-62ae-47aa-b0f4-69015655b3e3, Duration=168ms)
[2022-05-12T11:10:53.272Z] System.Private.CoreLib: Exception while executing function: Functions.FunctionServer. System.Net.Http: The SSL connection could not be established, see inner exception. System.Private.CoreLib: The remote certificate is invalid according to the validation procedure: RemoteCertificateNameMismatch.
```
