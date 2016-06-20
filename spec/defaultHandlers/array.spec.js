import arrayHandler from '../../lib/defaultHandlers/array'

describe('Array Handler',function(){

  it('should returns true confirming that its an array',()=>{
    expect(arrayHandler.check(2)).toBe(false)
  })

  it('should returns false confirming that "a" is NOT an array',()=>{
    expect(arrayHandler.check('a')).toBe(false)
  })

  it('should returns false confirming that {} is NOT an array',()=>{
    expect(arrayHandler.check({})).toBe(false)
  })

  it('should returns false confirming that [] is NOT an array',()=>{
    expect(arrayHandler.check([])).toBe(true)
  })

  it('should returns false confirming that true is NOT an array',()=>{
    expect(arrayHandler.check(undefined)).toBe(false)
  })

  it('should returns false confirming that false is NOT an array',()=>{
    expect(arrayHandler.check(false)).toBe(false)
  })

  it('should returns false confirming that true is NOT an array',()=>{
    expect(arrayHandler.check(true)).toBe(false)
  })

  it('should returns false confirming that console.log is NOT an array',()=>{
    expect(arrayHandler.check(console.log)).toBe(false)
  })

  it('should returns false confirming that Promise is NOT an array',()=>{
    expect(arrayHandler.check(new Promise(()=>{}))).toBe(false)
  })
})
