import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return Jmlindst', () => {
        const query = "andrew";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Jmlindst"
          ));
    });

    test('should return my name', () => {
        const query = "name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Jonathan Lindstrom"
          ));
    });

  

    test('should return plus', () => {
        const query = "What is 20 plus 67?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "87"
          ));
    });

    test('should return multplied', () => {
        const query = "What is 98 multiplied by 73?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "7154"
          ));
    });

    test('should return multplied', () => {
        const query = "What is 98 minus 73?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "-11"
          ));
    });
   

   

    
    test('should return my name', () => {
        const query = "Which of the following numbers is both a square and a cube: 470, 3356, 625, 1723, 64, 2543?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "64"
          ));
    });
});

