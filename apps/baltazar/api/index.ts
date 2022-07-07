export default function handler(request: any, response: any) {
  response.status(200).send({ date: new Date(), system: "baltazar" });
}
