
const MyMock = jest.fn();

MyMock.mockReturnValueOnce(2).mockReturnValueOnce(2)

describe("should be equal", () => {
    test("should make x some sum", () => {
        expect( MyMock(2)).toBe(2)
    })
        test("should make some sum", () => {
        expect( MyMock(4)).toBe(2)
    })
})