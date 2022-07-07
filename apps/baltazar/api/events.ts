export default function handler(request: any, response: any) {
  if (request.method === "POST") {
    response.status(200).send({ date: new Date(), system: "baltazar/events" });
  }
}
