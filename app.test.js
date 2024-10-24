const runner = require('./app')

describe('Job 8', () => {
  it('Menampilkan urutan tinggi badan dengan benar', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    runner()
    expect(consoleSpy).toHaveBeenCalledWith('Atlet Rizki tinggi badannya 150cm')
    expect(consoleSpy).toHaveBeenCalledWith('Atlet Ambar tinggi badannya 155cm')
    expect(consoleSpy).toHaveBeenCalledWith('Atlet Rada tinggi badannya 148cm')
    expect(consoleSpy).toHaveBeenCalledWith('Atlet Tika tinggi badannya 165cm')
    expect(consoleSpy).toHaveBeenCalledWith('Atlet Malik tinggi badannya 170cm')
    expect(consoleSpy).toHaveBeenCalledWith('Atlet Nanang tinggi badannya 168cm')
    expect(consoleSpy).toHaveBeenCalledWith('Atlet Azizah tinggi badannya 166cm')
  })
})