export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // This is your Feature.fm link
    const targetUrl = "https://label-caster.ffm.to/tsh4j2ttpj";

    // This fetches the actual content from Feature.fm
    let response = await fetch(targetUrl, {
      headers: {
        "User-Agent": request.headers.get("User-Agent"),
        "Accept": request.headers.get("Accept")
      }
    });

    // This sends the content to the browser but keeps YOUR domain in the bar
    return new Response(response.body, {
      headers: {
        ...response.headers,
        "content-type": response.headers.get("content-type")
      }
    });
  }
};
