using Microsoft.AspNetCore.Mvc;

namespace MiniFtp.Controllers;

[ApiController]
[Route("[controller]")]
public class FilesController : ControllerBase
{
    private readonly ILogger<FilesController> _logger;
    private static string BaseDirectory = Path.Combine(Path.GetTempPath(), "MiniFtp");

    public FilesController(ILogger<FilesController> logger)
    {
        _logger = logger;
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(string))]
    [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
    public async Task<IActionResult> UploadFile(IFormFile file)
    {
        CheckAndCreateDirectory();

        using (var fileStream = new FileStream(Path.Combine(BaseDirectory, file.FileName), FileMode.Create))
        {
            await file.CopyToAsync(fileStream);
        }

        _logger.LogInformation("Name: {0}, Length: {1}", file.FileName, file.Length);
        return Ok(file.FileName);
    }

    private static void CheckAndCreateDirectory()
    {
        if (Directory.Exists(BaseDirectory) == false)
        {
            Directory.CreateDirectory(BaseDirectory);
        }
    }

    [HttpGet]
    public async Task<IActionResult> GetFiles()
    {
        CheckAndCreateDirectory();

        var files = Directory.GetFiles(BaseDirectory);
        return Ok(files);
    }
}
